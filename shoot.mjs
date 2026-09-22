import { chromium } from 'playwright';

const outDir = '/tmp/claude-0/-home-claude-repo/ce41f099-cfd0-5ee9-a54c-142707240890/scratchpad';
const port = process.env.PORT || '4180';
const prefix = process.env.PREFIX || 'rup';
const base = `http://localhost:${port}/`;

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });

async function run(viewport, tag) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', (err) => errors.push(String(err)));
  page.on('requestfailed', (req) => {
    const url = req.url();
    if (!url.includes('fonts.googleapis.com')) errors.push('FAILED: ' + url + ' ' + (req.failure()?.errorText || ''));
  });

  async function shot(path, name) {
    await page.goto(base + '#' + path, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `${outDir}/${prefix}-${tag}-${name}.png`, fullPage: true });
    console.log('shot', tag, name, 'ok');
  }

  await shot('/', 'home');
  await shot('/collection', 'collection');
  await shot('/product/1', 'product');
  await page.click('button:has-text("Add to Bag"), button:has-text("ADD TO BAG")');
  await page.waitForURL('**/#/cart');
  await page.screenshot({ path: `${outDir}/${prefix}-${tag}-cart.png`, fullPage: true });
  console.log('shot', tag, 'cart ok');
  await shot('/checkout', 'checkout');

  const secondaryPath = process.env.SECONDARY_PATH || '/weavers';
  await shot(secondaryPath, 'makers');

  console.log(`${tag} ERRORS:`, JSON.stringify(errors, null, 2));
  await page.close();
}

await run({ width: 1440, height: 900 }, 'desktop');
await run({ width: 390, height: 844 }, 'mobile');

await browser.close();
