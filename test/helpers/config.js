// const plugins = ['postcss-import', 'postcss-nested', 'postcss-mixins', 'postcss-conditionals', 'postcss-each', 'postcss-for', 'postcss-calc', 'cssnext'];
const plugins = ['postcss-mixins', 'postcss-nested', 'postcss-for', 'postcss-calc'];
const options = {
  root: './css',
  minify: true,
  use: plugins,
  autoprefixer: {
    // disable
    browsers: '',
    cascade: true
  },
  cssnano: {
    calc: false,
    autoprefixer: false,
    mergeRules: false,
    safe: true,
    discardComments: true,
    core: false
  }
};

module.exports = {plugins, options};
