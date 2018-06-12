import * as launchChrome from '@serverless-chrome/lambda';

export const getChromeUrl = async (): Promise<string> => {
  const chrome = await launchChrome();
  return chrome.url;
};
