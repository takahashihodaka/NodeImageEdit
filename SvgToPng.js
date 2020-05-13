const sharp = require('sharp');

const inputText = 'hello worldああああi';
const svg = Buffer.from(
`<svg width="640" height="480" viewBox="0 0 640 480">
<text x="0" y="40" font-size="30" fill="white" stroke="blue" stroke-width="0" style="font-family: MS Gothic;">${inputText}</text>
</svg>`
);

sharp(svg,{density: 300})
    .png()
    .toFile('SvgToPng.png');