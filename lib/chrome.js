const launchChrome = require('@serverless-chrome/lambda');
const puppeteer = require('puppeteer');
const fetch = require('node-fetch');

const version = async () => {
  const chrome = await launchChrome({
    flags: ['--window-size=1280,1696', '--hide-scrollbars'],
  });

  const res = await fetch(`${chrome.url}/json/version`);
  const body = await res.json();
  console.log({ body });
  return body;
};

const page = async () => {
  const body = await version();

  const browser = await puppeteer.launch({
    browserWSEndpoint: body.webSocketDebuggerUrl,
  });

  return browser.newPage();
};

module.exports = { page, version };
