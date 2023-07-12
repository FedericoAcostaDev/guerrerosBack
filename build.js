import fs from 'fs'

const buildTime = new Date().toString()
const filePath = 'built-time.js'

fs.writeFile(filePath, `module.exports = '${buildTime}'`, (err) => {
  if (err) {
    throw err
  }
  console.log('Build time file created successfully!')
})
