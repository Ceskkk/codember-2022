import * as fs from 'fs'

const parseMecenas = (mecenas) => JSON.parse(mecenas)

export default function challenge05 () {
  const mecenasFile = fs.readFileSync('./challenge05/mecenas.txt', 'utf8')
  const mecenasList = parseMecenas(mecenasFile)

  let killer = 0
  let dead = 1
  let deadCounter = mecenasList.length
  let winner = { name: mecenasList[0], index: 0 }

  while (deadCounter > 1) {
    if (mecenasList[killer % mecenasList.length] === '') {
      killer++
      continue
    }

    if (mecenasList[(killer + dead) % mecenasList.length] === '') {
      dead++
      continue
    }

    mecenasList[(killer + dead) % mecenasList.length] = ''
    winner = {
      index: killer % mecenasList.length,
      name: mecenasList[killer % mecenasList.length]
    }
    killer += dead + 1
    dead = 1
    deadCounter--
  }

  return `${winner.name}-${winner.index}`
}
