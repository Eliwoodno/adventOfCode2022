const FS = require('fs')

const formattedInput = FS.readFileSync('./input', { encoding: 'utf-8'}).trim()


const getMarkerIndex = (needleRange) => {
    for (let i = 0; i < formattedInput.length - needleRange - 1; i++) {
        const slice = formattedInput.slice(i, i + needleRange).split("")
        if(slice.length === new Set(slice).size) {
            return i + needleRange
        }
    }
}
// Part 1
console.log(getMarkerIndex(4))

//Part 2
console.log(getMarkerIndex(14))
