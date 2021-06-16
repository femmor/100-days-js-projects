const number = document.querySelector('.number')
const button = document.querySelector('.button')

const generateNumber = () => {
  const rand = Math.floor(Math.random() * 1000)
  number.innerHTML = rand
}

button.addEventListener('click', generateNumber)