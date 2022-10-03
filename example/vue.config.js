const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/dkfds-vue3-example/' : '/',
  transpileDependencies: true,
  chainWebpack(config) {
    config.resolve.symlinks(false);
    config.resolve.alias.set('vue', path.resolve('./node_modules/vue'));
  },
});
