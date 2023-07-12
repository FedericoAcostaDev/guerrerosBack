import fs from 'fs'
fs.writeFile('built-time.js', `module.exports = '${new Date()}'`, (err) => {
  if (err) throw err
  console.log('Build time file created successfully!')
})
