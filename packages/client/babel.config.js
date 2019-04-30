module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        targets: '> 0.25%',
        // loose: true,
        // modules: 'commonjs',
      },
    ],
    ['@babel/typescript', { isTSX: true, allExtensions: true }],
    '@babel/react',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: true,
      },
    ],
  ],
  inputSourceMap: true,
  sourceMaps: true,
};
