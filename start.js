require("babel-polyfill")
require('babel-register')({
  'presets': [
    'stage-3',
    ['latest-node', { 'target': 'current' }]
  ]
})
require('./server')
// require('./server/app')
