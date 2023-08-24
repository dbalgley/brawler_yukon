const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Davis\'s WebXone'
    }
  },
  transpileDependencies: true,

  pluginOptions: {
    s3Deploy: {
      awsProfile: 'default',
      region: 'us-east-2',
      bucket: 'www.davisbalgley.com',
      createBucket: false,
      staticHosting: false,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: true,
      cloudfrontId: 'E303J9UPM8BEV7',
      cloudfrontMatchers: '/*',
      uploadConcurrency: 5,
      pluginVersion: '4.0.0-rc3',
      registry: undefined,
      overrideEndpoint: false
    }
  }
})
