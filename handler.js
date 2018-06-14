const chrome = require('./lib/chrome');
const gf = require('./sites/gf');

const pgf = async (event, context, callback) => {
  const result = await gf.main();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      result,
      input: event,
    }),
  };

  callback(null, response);
};

const debug = async (event, context, callback) => {
  const version = await chrome.version();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      version,
      input: event,
    }),
  };

  callback(null, response);
};

module.exports = { debug, pgf };
