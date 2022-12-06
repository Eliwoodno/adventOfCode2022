const FS = require('fs')

const instructions = FS.readFileSync('./instructions.txt', { encoding: 'utf-8'})
    .trim()
    .split('\n')
    .map(line => 
        {
            return line.match(/\d+/g).map(e => parseInt(e))
        }
    )

const getAnswer = (part) => {
    const stacks = 
    {
        1: ['V', 'J', 'B', 'D'],
        2: ['F', 'D', 'R', 'W', 'B', 'V', 'P'],
        3: ['Q', 'W', 'C', 'D', 'L', 'F', 'G', 'R'],
        4: ['B', 'D', 'N', 'L', 'M', 'P', 'J', 'W'],
        5: ['Q', 'S', 'C', 'P', 'B', 'N', 'H'],
        6: ['G', 'N', 'S', 'B', 'D', 'R'],
        7: ['H', 'S', 'F', 'Q', 'M', 'P', 'B', 'Z'],
        8: ['F', 'L', 'W'],
        9: ['R', 'M', 'F', 'V', 'S']
    }   
    let answer = ''

    const followInstuction = ({amount, from, to}) => {
        let removedCrates = stacks[from].splice(0, amount)
        if(part === 2) { removedCrates = removedCrates.reverse() }
        removedCrates.forEach(removedCrate => {
            stacks[to].unshift(removedCrate)
        })   
    }

    instructions.forEach(i => {
        followInstuction({amount: i[0], from: i[1], to: i[2]})
    })

    for (const stack in stacks) {
        answer += stacks[stack][0]
    }

    return answer
}
console.log(getAnswer(1))
console.log(getAnswer(2))
