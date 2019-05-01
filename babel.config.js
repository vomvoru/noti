// TODO '@babel/plugin-transform-runtime 에 대한 browserslist 지원 이슈가 해결되면 수정 필요
// https://github.com/babel/babel/issues/6629

module.exports = {
  presets: [['@babel/typescript', { isTSX: true, allExtensions: true }], '@babel/react'],
  plugins: [
    '@babel/proposal-class-properties',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      '@babel/plugin-transform-modules-commonjs',
      {
        loose: true,
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
  ],
  inputSourceMap: true,
  sourceMaps: true,
};
