#!/usr/bin/env node
/*
  Export a page at the deliverable breakpoints and check it in between.

  Usage:
    node skills/landing-page/screenshot.js website/<slug>/index.html [--out <dir>] [--viewport] [--all]

  Deliverables (assignment spec): mobile-375.png, tablet-768.png, desktop-1440.png,
  full page by default (--viewport for the first screen only). Default out: <page dir>/screenshots/.
  In-between widths 320, 1024, 1280 and 1600 are checked too (saved with --all) so the
  page behaves sensibly between breakpoints.
  Checks: fonts loaded, horizontal overflow at every width, console errors,
  missing images, more than one h1. Exit code 2 if any fail.
*/
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');
const puppeteer = require('puppeteer-core');

const args = process.argv.slice(2);
const file = args.find(a => !a.startsWith('--') && args[args.indexOf(a) - 1] !== '--out');
if (!file) { console.error('Usage: node screenshot.js <page.html> [--out dir] [--viewport]'); process.exit(1); }
const abs = path.resolve(file);
const outDir = args.includes('--out') ? path.resolve(args[args.indexOf('--out') + 1]) : path.join(path.dirname(abs), 'screenshots');
const fullPage = !args.includes('--viewport');
const DELIVER = { 375: 'mobile-375', 768: 'tablet-768', 1440: 'desktop-1440' };
const CHECK_ONLY = [320, 1024, 1280, 1600];
const saveAll = args.includes('--all');

const executablePath = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
].filter(Boolean).find(p => fs.existsSync(p));
if (!executablePath) { console.error('No Chrome/Edge found. Set CHROME_PATH.'); process.exit(1); }

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await puppeteer.launch({ executablePath, headless: 'new', args: ['--allow-file-access-from-files'] });
  const problems = [];

  const widths = [...new Set([...Object.keys(DELIVER).map(Number), ...CHECK_ONLY])].sort((a, b) => a - b);
  for (const width of widths) {
    const page = await browser.newPage();
    const errors = [];
    // Missing licensed font files are expected: tokens.css falls back to the trial files.
    page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.text()); });
    page.on('requestfailed', r => { if (!/assets\/fonts\/[^/]+\.woff2$/.test(r.url())) errors.push('Failed to load ' + decodeURIComponent(r.url())); });
    page.on('pageerror', e => errors.push(e.message));
    await page.setViewport({ width, height: width < 768 ? 812 : 900, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(abs).href, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    // Reveal everything that animates in on scroll, so full-page shots are complete.
    await page.evaluate(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('in')));

    const check = await page.evaluate(() => {
      const docW = document.documentElement.clientWidth;
      const wide = [...document.querySelectorAll('body *')].filter(el => {
        const r = el.getBoundingClientRect();
        if (!r.width) return false;
        // elements inside a horizontal scroller are allowed past the edge
        for (let p = el.parentElement; p; p = p.parentElement) {
          const s = getComputedStyle(p);
          if (/(auto|scroll|hidden|clip)/.test(s.overflowX) && p !== document.body && p !== document.documentElement) return false;
        }
        return r.right > docW + 1 || r.left < -1;
      }).slice(0, 5).map(el => el.tagName.toLowerCase() + (el.className ? '.' + String(el.className).trim().split(/\s+/).join('.') : ''));
      const fam = n => [...document.fonts].some(f => f.family.replace(/"/g, '') === n && f.status === 'loaded');
      return {
        scrollW: document.documentElement.scrollWidth, docW, wide,
        season: fam('Season Mix'), matter: fam('Matter'),
        h1: document.querySelectorAll('h1').length,
        brokenImgs: [...document.images].filter(i => i.complete && !i.naturalWidth).map(i => i.getAttribute('src')),
      };
    });

    const tag = `${width}px`;
    if (check.scrollW > check.docW) problems.push(`${tag}: horizontal overflow (${check.scrollW} > ${check.docW})`);
    if (check.wide.length) problems.push(`${tag}: elements past the viewport edge: ${check.wide.join(', ')}`);
    if (width === 375) {
      if (!check.season) problems.push('Season Mix did not load');
      if (!check.matter) problems.push('Matter did not load');
      if (check.h1 !== 1) problems.push(`${check.h1} h1 elements (want exactly 1)`);
      if (check.brokenImgs.length) problems.push('Broken images: ' + check.brokenImgs.join(', '));
      if (errors.length) problems.push('Console errors: ' + errors.slice(0, 5).join(' | '));
    }

    const name = DELIVER[width] || (saveAll ? `check-${width}` : null);
    if (name) {
      const out = path.join(outDir, `${name}.png`);
      await page.screenshot({ path: out, fullPage });
      console.log(`✓ ${path.relative(process.cwd(), out)}`);
    }
    await page.close();
  }
  await browser.close();

  if (problems.length) {
    console.warn('\nCHECKS FAILED:\n- ' + problems.join('\n- '));
    process.exitCode = 2;
  } else console.log('\nChecks passed: fonts, one h1, images, no overflow from 320 to 1600px.');
})();
