const chrome = require('./lib/chrome');
const gf = require('./sites/gf');

const pgf = async (e, ctx, cb) => {
  const result = await gf.main();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      result,
      e,
    }),
  };

  ctx.callbackWaitsForEmptyEventLoop = false;
  cb(null, response);
};

const debug = async (e, ctx, cb) => {
  const version = await chrome.version();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      version,
      e,
    }),
  };

  cb(null, response);
};

module.exports = { debug, pgf };
