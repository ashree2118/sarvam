#!/usr/bin/env node
/*
  Export every .artboard in a banner HTML file to PNG.

  Usage:
    node skills/social-banner/export.js banners/meta/2026-11-10-bulbul/index.html
    node skills/social-banner/export.js <file.html> --scale 1      (exact size only)

  Writes <data-name>.png (exact platform size) and <data-name>@2x.png next to the HTML.
  Fails loudly if Season Mix or Matter didn't load, or if a .placeholder is present,
  because neither may ship. Warns when the trial (personal-use) font files were used.

  Needs: npm install (puppeteer-core) and a local Chrome/Edge. Set CHROME_PATH to override.
*/
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');
const puppeteer = require('puppeteer-core');

const args = process.argv.slice(2);
const file = args.find(a => !a.startsWith('--'));
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : null;
const allowDraft = args.includes('--draft');
if (!file) { console.error('Usage: node export.js <banner.html> [--scale 1|2] [--draft]'); process.exit(1); }

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
].filter(Boolean);
const executablePath = candidates.find(p => fs.existsSync(p));
if (!executablePath) { console.error('No Chrome/Edge found. Set CHROME_PATH.'); process.exit(1); }

(async () => {
  const abs = path.resolve(file);
  const outDir = path.dirname(abs);
  const browser = await puppeteer.launch({ executablePath, headless: 'new', args: ['--allow-file-access-from-files'] });
  const scales = scaleArg ? [scaleArg] : [1, 2];
  let problems = [];
  // The licensed files win when present (see the @font-face order in tokens.css).
  const fontDir = path.join(__dirname, '../../assets/fonts');
  const trialFonts = [['SeasonMixVFUprights.woff2', 'SeasonCollectionVF-TRIAL.ttf'], ['MatterUprights-VF.woff2', 'MatterCollectionVF-TRIAL.ttf']]
    .filter(([lic, trial]) => !fs.existsSync(path.join(fontDir, lic)) && fs.existsSync(path.join(fontDir, trial)))
    .map(([, trial]) => trial);

  for (const scale of scales) {
    const page = await browser.newPage();
    await page.setViewport({ width: 2600, height: 2200, deviceScaleFactor: scale });
    await page.goto(pathToFileURL(abs).href, { waitUntil: 'networkidle0' });
    // Request both families explicitly: a banner may use only one of them,
    // and unused faces are never fetched otherwise.
    await page.evaluate(() => Promise.all([
      document.fonts.load('425 64px "Season Mix"'),
      document.fonts.load('425 16px "Matter"'),
    ]).catch(() => {}));
    await page.evaluate(() => document.fonts.ready);

    if (scale === scales[0]) {
      const check = await page.evaluate(() => ({
        season: document.fonts.check('425 64px "Season Mix"') && [...document.fonts].some(f => f.family.replace(/"/g, '') === 'Season Mix' && f.status === 'loaded'),
        matter: [...document.fonts].some(f => f.family.replace(/"/g, '') === 'Matter' && f.status === 'loaded'),
        placeholders: document.querySelectorAll('.placeholder').length,
      }));
      if (!check.season) problems.push('Season Mix did not load (assets/fonts/SeasonMixVFUprights.woff2).');
      if (!check.matter) problems.push('Matter did not load (assets/fonts/MatterUprights-VF.woff2).');
      if (check.placeholders) problems.push(`${check.placeholders} placeholder(s) still on the artboards.`);
    }

    const boards = await page.$$('.artboard[data-name]');
    if (!boards.length) { console.error('No .artboard[data-name] elements found.'); process.exit(1); }
    for (const el of boards) {
      const name = await el.evaluate(n => n.dataset.name);
      const suffix = scale === 1 ? '' : `@${scale}x`;
      const out = path.join(outDir, `${name}${suffix}.png`);
      await el.screenshot({ path: out });
      const box = await el.boundingBox();
      console.log(`✓ ${path.relative(process.cwd(), out)}  (${Math.round(box.width * scale)}×${Math.round(box.height * scale)})`);
    }
    await page.close();
  }
  await browser.close();

  if (trialFonts.length) {
    console.log('\nFonts: trial files (' + trialFonts.join(', ') + '), personal-use licence. ' +
      'For commercial publishing, add Sarvam\'s licensed files to assets/fonts/ and re-export.');
  }
  if (problems.length) {
    console.warn('\nNOT READY TO SHIP:\n- ' + problems.join('\n- '));
    if (!allowDraft) process.exitCode = 2;
  }
})();
