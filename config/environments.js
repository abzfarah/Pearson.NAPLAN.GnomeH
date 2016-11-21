// Here is where you can define configuration overrides based on the execution environment.
// Supply a key to the default export matching the NODE_ENV that you wish to target, and
// the base configuration will apply your overrides before exporting itself.
module.exports = {
  // ======================================================
  // Overrides when NODE_ENV === 'development'
  // ======================================================
  // NOTE: In development, we use an explicit public path when the assets
  // are served webpack by to fix this issue:
  // http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
  development : (config) => ({
     compiler_public_path: `http://localhost:8004/`,
  }),

  // ======================================================
  // Overrides when NODE_ENV === 'intstg'
  // ======================================================
  intstg : (config) => ({
    compiler_public_path     : 'http://melbndevweb1.epenau.local:2016/',
    compiler_fail_on_warning : false,
    compiler_hash_type       : 'chunkhash',
    compiler_devtool         : null,
    compiler_stats           : {
      chunks       : true,
      chunkModules : true,
      colors       : true
    }
  }),


  // ======================================================
  // Overrides when NODE_ENV === 'stg'
  // ======================================================
  stg : (config) => ({
    compiler_public_path     : 'http://melbnintstgweb1.epenau.local:2016/',
    compiler_fail_on_warning : false,
    compiler_hash_type       : 'chunkhash',
    compiler_devtool         : null,
    compiler_stats           : {
      chunks       : true,
      chunkModules : true,
      colors       : true
    }
  }),


  // ======================================================
  // Overrides when NODE_ENV === 'devserver'
  // ======================================================
  devserver : (config) => ({
    compiler_public_path     : 'http://melbnstgweb1.epenau.local:2016/',
    compiler_fail_on_warning : false,
    compiler_hash_type       : 'chunkhash',
    compiler_devtool         : null,
    compiler_stats           : {
      chunks       : true,
      chunkModules : true,
      colors       : true
    }
  })
}
