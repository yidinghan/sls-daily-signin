const chrome = require('./lib/chrome');

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

module.exports = { debug };
