const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const smp = new SpeedMeasurePlugin()

module.exports = {
  webpack: config => {
    config.performance = { hints: 'warning' }
    config.stats = 'errors-only'
    config.output.sourceMapFilename = '[name].js.map'
    return config
  },
}
