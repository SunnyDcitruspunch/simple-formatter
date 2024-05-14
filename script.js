const numberInput = document.querySelector('.number-input')

if(numberInput) {
  numberInput.addEventListener('keyup', updateNumber)
}

function updateNumber(e) {
  const numberDisplayElement = document.querySelector('.display-number')
  if(numberDisplayElement) {
    const updatedValue = e?.target?.value

    if(updatedValue) {
      numberDisplayElement.textContent = getFormattedNumber(updatedValue)
    }
  }
}

function getFormattedNumber(numberString) {
  let result = ''
  let count = 0

  for(let i = numberString.length - 1; i >= 0; i--) {
    result = numberString[i] + result
    count++

    if(count === 3 && i != 0) {
      result = ',' + result
      count = 0
    }
  }

  return result
}
