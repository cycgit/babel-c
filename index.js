const babelo = require('babel-core')

const babelSync = (filepath) => {
  let result = babelo.transformFileSync(filepath,{presets:['react']}).code || ''
  return result
}

const babel = (filepath) => {
  return new Promise((resolve, reject) => {
    babelo.transformFile(filepath, {presets:['react']}, (err, result) => {
      if(err) {
        return reject(err)
      }
      resolve(result.code)
    })
  })
}

module.exports.babelSync = babelSync
module.exports.babel = babel