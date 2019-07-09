const fs = require('fs')

const readFile = (filePath, charset) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, charset, (err, result) => {
      if (err) return reject(err)

      return resolve(result)
    })
  })
}

readFile('../package.json', 'utf8')
.then((result) => JSON.parse(result).dependencies)
.then((dependencies) => console.log(dependencies))
.catch((error) => console.log(error))
