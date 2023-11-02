const path = require('node:path')
const fs = require('node:fs/promises')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

console.log(process.argv)
// console.log(path.sep)
/*

fs.readdir((folder),(err, files)=> {
    if(err){
        console.error('Error al leer el directiorio: ', err)
        return;
    }

    files.forEach(file => {
        const filePath = path.join(folder, file)
        fs.stat(filePath)
        console.log(file)
    })
}) */

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`No se puede leer el directorio ${folder}`))
    process.exit(1)
  }

  const filePromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // Status - informacion al archivo
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModefied = stats.mtime.toLocaleString()

    return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(10))} kb ${fileModefied}`
  })
  const filesInfo = await Promise.all(filePromises)
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
