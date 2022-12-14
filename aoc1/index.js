import { readFile } from 'node:fs/promises'

const str = await readFile('./input.txt', { encoding: 'utf-8' })

const elves = str.split('\n\n')

const totalCaloriesPerElf = []

for (const elv of elves) {
  const caloriesPerElf = elv.split('\n')
  totalCaloriesPerElf.push(caloriesPerElf.reduce((a, b) => +a + +b, 0))
}


// part 1
const elfWithMostCalories = Math.max(...totalCaloriesPerElf)
console.log(elfWithMostCalories)

// part 2
const sortedSet = totalCaloriesPerElf.sort((a, b) => b - a)
console.log(sortedSet[0] + sortedSet[1] + sortedSet[2])


