const FS = require('fs')

const formattedInput = FS.readFileSync('./input', { encoding: 'utf-8'})
    .trim()
    .split('\n')
    .map(line => {
        return line.match(/\d+/g).map(e => parseInt(e))
    })
//Part 1
const overlapsFull = formattedInput.filter(element =>
    (element[0] >= element[2] && element[1] <= element[3]) 
    || (element[0] <= element[2] && element[1] >= element[3])
)
console.log(`A range fully overlap the other in ${overlapsFull.length} assignment pairs`)

//Part 2
const overlaps = formattedInput.filter(element =>
    (element[0] <= element[3] && element[0] >= element[2]) 
    || (element[2] <= element[1] && element[2] >= element[0])
)
console.log(`A range overlap the other in ${overlaps.length} assignment pairs`)
