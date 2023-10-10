import { Level } from 'level'
import path from 'path'

// https://www.npmjs.com/package/level

const dataFolder = path.join(__dirname, '../../data')
export const client = new Level(dataFolder, {
  valueEncoding: 'json',
})

// async function printKeys() {
//   try {
//     console.log('Keys', await client.get('stuff'))
//   } catch (err) {
//     console.error(err)
//   }
// }

// printKeys()
