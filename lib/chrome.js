const launchChrome = require('@serverless-chrome/lambda');
const puppeteer = require('puppeteer');
const fetch = require('node-fetch');

const config = require('../config/base');

const chromeVersion = async () => {
  const pl = Object.assign(config.chrome, {
    flags: puppeteer.defaultArgs(),
  });
  if (pl.headless) {
    pl.flags.push(...pl.headlessFlags);
  }

  const chrome = await launchChrome(pl);

  const res = await fetch(`${chrome.url}/json/version`);
  const body = await res.json();
  console.log('chrome version', { body });
  return body;
};

const page = async () => {
  const { webSocketDebuggerUrl } = await chromeVersion();

  const browser = await puppeteer.connect({
    browserWSEndpoint: webSocketDebuggerUrl,
  });
  const version = await browser.version();
  console.log('puppeteer browser version', { version });

  return browser.newPage();
};

module.exports = { page, version: chromeVersion };
