const babelo = require('babel-core')

const babelSync = (filepath) => {
  let result = babelo.transformFileSync(filepath).code || ''
  return result
}

const babel = (filepath) => {
  return new Promise((resolve, reject) => {
    babelo.transformFile(filepath, (err, result) => {
      if(err) {
        return reject(err)
      }
      resolve(result.code)
    })
  })
}

module.exports.babelSync = babelSync
module.exports.babel = babel