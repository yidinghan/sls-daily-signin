const chrome = require('../lib/chrome');
const { gf } = require('../config/base');

const main = async () => {
  const page = await chrome.getPage();
  await page.goto(gf.jfhost);

  const { title } = await chrome.logPage(page);

  await page.browser().close();
  return title;
};

module.exports = { main };
