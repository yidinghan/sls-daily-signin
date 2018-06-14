const gf = {
  jfhost: 'https://jf.gf.com.cn',
};

const chrome = {
  headless: true,
  headlessFlags: [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--mute-audio',
  ],
};

module.exports = { gf, chrome };
