let word = document.querySelector('.word')
const alert = document.querySelector('.alert')
const close = document.querySelector('.close')
const input = document.querySelector('.text-input')
const submitBtn = document.querySelector('.submit-btn')

const closeAlert = () => {
  alert.style.display = 'none'
}

const showAlert = () => {
  alert.style.display = 'block'
}

const getInputValue = (e) => {
  e.preventDefault()
  const palindrome = input.value.split('').reverse().join('')
  if (input.value === '') {
    showAlert()
    setTimeout(() => {
      closeAlert()
    }, 3000);
    return
  }
  if (input.value === palindrome) {
    word.innerHTML = `${input.value.toUpperCase()} is a palindrome`
    word.style.color = '#3f784c'
  } else {
    word.innerHTML = `${input.value} is not a palindrome`
    word.style.color = '#e71d36'
  }
  word.style.display = 'block'
}

submitBtn.addEventListener('click', getInputValue)
close.addEventListener('click', closeAlert)