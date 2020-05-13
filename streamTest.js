const sharp = require('sharp');
const fs = require('fs');

const resizer = sharp()
  .resize(200, 200)
  .png();

const write = new fs.createWriteStream(`out1.png`);

const read = new fs.createReadStream('src.png')
  .pipe(resizer)
  .pipe(write);