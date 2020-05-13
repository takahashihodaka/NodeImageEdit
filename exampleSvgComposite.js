function createImage(platenumber) {
    //Trying to create some sort of responsiveness
    let fontsize = 80;
    let letterspace = 10;
    let width = 300;
    let height = 90;
    let x = 0;
    let y = -45;

    const inputlength = platenumber.length;

    //Minumum Length
    if (inputlength == 2) {
        x = -200;
    }
    if (inputlength == 3) {
        x = -150;
    }
    if (inputlength == 4) {
        x = -130;
    }
    if (inputlength == 5) {
        x = -105;
    }
    if (inputlength == 6) {
        x = -65;
    }


    try {
        console.log('stream is duplex, ', pipe instanceof stream.Duplex);
        //Read the svg code into a buffer with a passed in plate number
        const svg = new Buffer(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${x} ${y} 500 40">
                <defs>
                <style type="text/css">
                    <![CDATA[
                        @font-face {
                            font-family: LicensePlate;
                            src: url('LicensePlate.ttf');
                        }
                        svg {
                            width: 100%;
                            height: 100%;
                        }
                    ]]>
                </style>
                </defs>

                <text x="0" y="0" font-family="LicensePlate" font-size="${fontsize}" letter-spacing="${letterspace}">
                    ${platenumber.toUpperCase()}
                </text>
            </svg>`
        );

        const plateid = rand.generate(10);

        //Create a write stream to a randomly generated file name
        const write = new fs.createWriteStream(`plates/${plateid}.jpg`);

        //Create the sharp pipeline
        const pipeline = pipe
            .overlayWith(svg, { gravity: sharp.gravity.center })//we center the svg image over the top of whatever image gets passed into the pipeline
            .jpeg();//we convert to JPG because it is a compressed file format and will save space (we could also do webp if we really want to be slick about it)

        //Create the read stream from the license plate template
        const read = new fs.createReadStream('plate-2.png')
            .pipe(pipeline)//pipe out sharp pipeline
            .pipe(write);//add the write stream so that our sharp pipeline knows where to put the image

        return plateid;
    } catch (e) {
        console.log(e);
        return null;
    }
}