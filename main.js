const path = require("path");

const sharp = require("sharp");
const awty = require("are-we-there-yet");
const { file } = require("lemonutilities");

const config = {
    blocktype: 'mine'
}

sharp({
    create: {
        width: 162,
        height: 144,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
})
.composite([
    {
        input: 'filters/additive.png',
        top: 0,
        left: 0
    },
    {
        input: path.join(__dirname, 'note types', config.blocktype + '.png'),
        tile: true,
        top: 0,
        left: 0,
        blend: "dest-in"
    },
    {
        input: path.join(__dirname, 'note types', config.blocktype + '.png'),
        tile: true,
        top: 0,
        left: 0,
        blend: "overlay"
    },
    {
        input: 'filters/erase_mask.png',
        top: 0,
        left: 0,
        blend: 'dest-out'
    },
    {
        input: 'filters/watermark.png',
        top: 129,
        left: 90
    }
])
.toFile(path.join("out", config.blocktype + '.png'))
.catch(err => {
    console.error('Error:', err);
});



let sheetdata = {
    width: 18,
    height: 18,
    frames: 67,
    states: []
};

let states = {
    off: [0],
    on: [1],
    dissolve: [1, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    dither: [1, 16, 15, 14, 13, 12, 11, 10, 0],
    swipe: [1, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0],
    swipediag: [1, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0],
    wave: [1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 0],
    collapse: [1, 38, 39, 40, 41, 42, 43, 44, 45, 0],
    noise: [1, 58, 59, 60, 61, 62, 63, 64, 65, 66, 0]
};

Object.entries(states).forEach(([keyname, state]) => {
    if (state.length == 1) {
        sheetdata.states.push({
            name: keyname,
            frames: state,
            fps: 8,
            loop: false
        });
    } else {
        for (let i = 0; i < 39; i++) {
            const currentspeed = i + 6;
            const reversestate = state.slice().reverse();
            
            sheetdata.states.push({
                name: `${keyname}in${currentspeed}`,
                frames: reversestate,
                fps: currentspeed,
                loop: false
            });

            sheetdata.states.push({
                name: `${keyname}out${currentspeed}`,
                frames: state,
                fps: currentspeed,
                loop: false
            });
        }

        let count = 0;

        state.forEach(frame => {
            sheetdata.states.push({
                name: `${keyname}static${count}`,
                frames: [frame],
                fps: 8,
                loop: false
            });

            count++;
        });
    }
});

file.write(path.join("out", "block" + '.json'), JSON.stringify(sheetdata));
file.write(path.join("out", "hold" + '.json'), JSON.stringify(sheetdata));
file.write(path.join("out", "inverse" + '.json'), JSON.stringify(sheetdata));
file.write(path.join("out", "mine" + '.json'), JSON.stringify(sheetdata));