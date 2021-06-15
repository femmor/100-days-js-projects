const button = document.querySelector('.button')
const color = document.querySelector('.color')

// const getLocalColor = () => {
//   let color = ''
//   if (localStorage.getItem(color)) {
//     localStorage.getItem('color', color)
//   }
//   return
// }

// Generate random color number
let hex = Math.random()

const generateColor = () => {
  hex = Math.random().toString(16).substring(2, 8)
  document.body.style.backgroundColor = `#${hex}`
  localStorage.setItem('color', color)
}

button.addEventListener('click', (e) => {
  if (e.target.classList.contains('generate')) {
    generateColor()
    color.textContent = `#${hex}`
  }
})
