exports.config = {
  bundles: [
    { components: ['wu-row', 'wu-col'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
