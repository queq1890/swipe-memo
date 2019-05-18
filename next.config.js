function moduleExists (name) {
  try {
    return require.resolve(name)
  } catch (error) {
    return false
  }
}

const nextConfig = {
  target: 'serverless'
}

const withTypeScript = moduleExists('@zeit/next-typescript')
  ? require('@zeit/next-typescript')
  : {}

const withOffline = moduleExists('next-offline')
  ? require('next-offline')
  : {}

  module.exports = moduleExists('next-offline') && moduleExists('@zeit/next-typescript')
    ? withTypeScript(withOffline(nextConfig))
    : nextConfig