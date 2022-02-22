const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // Set headless to false for start
    const page = await browser.newPage();
    await page.goto('http://localhost:8085');
})();