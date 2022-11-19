import * as fs from 'fs'

const parseColors = (colors) => JSON.parse(colors)
const formatQuotes = (text) => text.replaceAll("'", '"')

export default function challenge02 () {
  const colorsFile = fs.readFileSync('./challenge03/colors.txt', 'utf8')
  const splittedColors = parseColors(formatQuotes(colorsFile))

  let longestZebraCounter = 1
  let lastLongestZebraColor = splittedColors[0]

  splittedColors.map((_color, index) => {
    let counter = 1

    if (splittedColors[index] === splittedColors[index + 1]) return null
    else counter++

    while (splittedColors[index + counter] === splittedColors[index + counter - 2]) {
      counter++
    }

    if (counter > longestZebraCounter) {
      longestZebraCounter = counter
      lastLongestZebraColor = splittedColors[index + counter - 1]
    }

    return null
  })

  return `${longestZebraCounter}@${lastLongestZebraColor}`
}
