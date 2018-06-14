const chrome = require('./lib/chrome');

const hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
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

module.exports = { hello, debug };
