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
  const vowels = 'aeiou'
  let count = 0

  if (input.value === '') {
    showAlert()
    setTimeout(() => {
      closeAlert()
    }, 3000);
    return
  }

  for (let i = 0; i < input.value.length; i++) {
    if (input.value[i].match(/[a,e,i,o,u]/ig)) {
      count += 1
      word.innerHTML = `${input.value.toUpperCase()} has ${count} ${count > 1 ? 'vowels' : 'vowel'}`
    }
  }
  word.style.display = 'block'
}

submitBtn.addEventListener('click', getInputValue)
close.addEventListener('click', closeAlert)