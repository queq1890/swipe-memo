const withTypeScript = require('@zeit/next-typescript');
module.exports = (_, { defaultConfig }) => {
  const config = {
    ...defaultConfig,
    target: 'serverless',
  };
  return withTypeScript(config);
};
