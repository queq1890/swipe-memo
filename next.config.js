const withTypeScript = require('@zeit/next-typescript');
const withOffline = require('next-offline')


module.exports = (_, { defaultConfig }) => {
  const config = {
    ...defaultConfig,
    target: 'serverless',
  };
  return withOffline(withTypeScript(config));
};
