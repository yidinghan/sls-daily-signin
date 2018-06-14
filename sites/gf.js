const chrome = require('../lib/chrome');
const { gf } = require('../config/base');

const main = async () => {
  const page = await chrome.page();
  await page.goto(gf.jfhost);

  const title = await page.title();

  await page.browser().close();
  return title;
};

module.exports = { main };
