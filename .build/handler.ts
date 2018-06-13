import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
// import { getChromeUrl } from './lib/chrome';
import * as puppeteer from 'puppeteer';

export const hello: Handler = (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message:
        'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  cb(null, response);
};

// export const debug: Handler = async (
//   event: APIGatewayEvent,
//   context: Context,
//   cb: Callback
// ) => {
//   const url = await getChromeUrl();
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       url,
//       input: event,
//     }),
//   };
//   cb(null, response);
// };

export const debug: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback
) => {
  const debuggerUrl = 'ws://127.0.0.1:9222/devtools/browser';
  const browser = await puppeteer.connect({
    browserWSEndpoint: debuggerUrl,
  });
  const version = await browser.version();

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      version,
      input: event,
    }),
  };

  cb(null, response);
};
