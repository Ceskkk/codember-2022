const MIN_NUMBER_TO_CHECK = 11098
const MAX_NUMBER_TO_CHECK = 98123

const haveMinimumTwoFives = (numSplitted) => {
  let fiveCounter = 0

  numSplitted.every((singleNum) => {
    if (singleNum === '5') fiveCounter++
    if (fiveCounter < 2) { return true } else { return false }
  })

  return fiveCounter >= 2
}

const haveAscOrder = (numSplitted) => {
  let isAsc = true

  numSplitted.every((_num, index) => {
    if (numSplitted[index] > numSplitted[index + 1]) {
      isAsc = false
      return false
    }
    return true
  })

  return isAsc
}

const isPosibleSolution = (num) => {
  const numSplitted = num.toString().split('')

  const fiveCheck = haveMinimumTwoFives(numSplitted)
  const ascNumCheck = haveAscOrder(numSplitted)

  return fiveCheck && ascNumCheck
}

export default function challenge04 () {
  const posibleSolutions = []

  for (let x = MIN_NUMBER_TO_CHECK; x < MAX_NUMBER_TO_CHECK; x++) {
    if (isPosibleSolution(x)) posibleSolutions.push(x)
  }

  return `${posibleSolutions.length}-${posibleSolutions[55]}`
}
