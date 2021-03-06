module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  outputDir: './backend/public',

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  // outputDir: '../backend/public',

  // modify the location of the generated HTML file.
  // make sure to do this only in production.

  // indexPath: process.env.NODE_ENV === 'production'
  //   ? './backend/backend/public/index.html'
  //   : 'index.html'

  indexPath: process.env.NODE_ENV === 'production'
  ? './html/index.html'
  : 'index.html'
}
