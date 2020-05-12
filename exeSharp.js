const sharp = require('sharp');

//画像同士の合成(静的ファイル同士)
(async () => {
  try {
    await sharp('src.png')
      .composite([{input: 'txt.png'}])
      .toFile('output.png');
  } catch (error) {
    console.log(error);
  }
})();