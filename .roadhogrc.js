// npm i antd-mobile -S
const path = require('path');
const pxtorem = require('postcss-pxtorem');
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
];

export default {
  entry: 'src/admin.js',
  extraBabelPlugins: [
    'transform-runtime',
    ['import', { libraryName: 'antd-mobile', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-runtime',
      ],
    },
    production: {
      extraBabelPlugins: [
        'transform-runtime',
      ],
    },
  },
  svgSpriteLoaderDirs: svgSpriteDirs,
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
  theme: {
    "@brand-primary": "#f45675",
    "@primary-color": "#f45675",
    "@link-color": "#f45675",
    "@primary-button-fill-tap": "#f45675",
    "fill-tap": "#f45675",
    "@border-radius-base": "2px",
    "@font-size-base": "28px",
    "@font-size-heading": "28px",
    "@font-size-caption": "28px",
    "@font-size-subhead": "24px",
    "@line-height-base": "1.2"
  }
}
