path = require('path')

#path-extra
path_extra = require('./lib/path')
path.tempdir = path_extra.tempdir

module.exports = path