const fs = require('fs')

const readFile = (filePath, charset) => new Promise((resolve, reject) => {
  fs.readFile(filePath, charset, (err, result) => {
    if (err) return reject(err)
    resolve(result)
  })
})

// readFile('../package.json', 'utf8')
// .then((result) => JSON.parse(result).dependencies)
// .then((dependencies) => console.log(dependencies))
// .catch((error) => console.log(error))

const requestAjax = async () => {
  try {
    const result = await readFile('./package.json', 'utf8')
    const dependencies = await JSON.parse(result).dependencies
    console.log(dependencies)
  } catch (error) {
    console.log('ERROR:', error)
  }
}

requestAjax()
