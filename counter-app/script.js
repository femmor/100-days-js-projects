const count = document.querySelector('.count')
const subtract = document.querySelector('.subtract')
const add = document.querySelector('.add')
const reset = document.querySelector('.reset')
const buttons = document.querySelector('.buttons')


// Event Deligation
buttons.addEventListener('click', e => {
  if (e.target.classList.contains('add')) {
    count.innerHTML++
    setColor()
  } else if (e.target.classList.contains('subtract')) {
    count.innerHTML--
    setColor()
  } else if(e.target.classList.contains('reset')) {
    resetCount()
  }
})

const resetCount = () => {
  count.innerHTML = 0
  setColor()
}

const setColor = () => {
  if (count.innerHTML > 0) {
    count.style.color = '#c5d86d'
  }
  else if (count.innerHTML < 0) {
    count.style.color = '#e71d36'
  } else {
    count.style.color = '#fff'
  }
}