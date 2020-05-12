const sharp = require('sharp');

//固定背景+動的テキスト

const watermarkText = 'hello world';
const textedSVG = Buffer.from(`<svg height="40" width="200"> <text x="0" y="20" font-size="20" fill="#fff">${watermarkText}</text> </svg>`)

(async () => {
  try {
    await sharp('src.png')
      .composite([{input: textedSVG}])
      .toFile('output2.png');
  } catch (error) {
    console.log(error);
  }
})();