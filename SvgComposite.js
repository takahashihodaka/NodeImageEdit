const sharp = require('sharp');
const fs = require('fs');

const inputText = 'hello worldああああi';
const svg = Buffer.from(
`<svg width="640" height="480" viewBox="0 0 640 480">
<text x="0" y="40" font-size="30" fill="red" style="font-family: MS Gothic;">${inputText}</text>
</svg>`
);

const SvgCompositor = sharp()
  .composite([{input: svg}])
  .png();

const SvgToPng = sharp().png();

const write = new fs.createWriteStream(`outSvgComp.png`);

const writeSvg = new fs.createWriteStream('outSvg.png');

const read = new fs.createReadStream('src.png')
  .pipe(SvgCompositor)
  .pipe(write);

const readSvg = svg
  .pipe(SvgToPng)
  .pipe(writeSvg);