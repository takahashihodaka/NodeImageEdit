const generatePlaceholderImageWithText = async (width, height, message) => {
    const overlay = `<svg width="${width - 20}" height="${height - 20}">
      <text x="50%" y="50%" font-family="sans-serif" font-size="16" text-anchor="middle">${message}</text>
    </svg>`;
  
    return await sharp({
      create: {
        width: width,
        height: height,
        channels: 4,
        background: { r: 230, g: 230, b: 230, alpha: 1 }
      }
    })
      .composite([{
        input: Buffer.from(overlay),
        gravity: 'center',
      }])
      .jpeg()
      .toBuffer();
  }