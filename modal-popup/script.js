const modalBtn = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')

const openModal = () => {
  modal.style.display = 'block'
}

const closeModal = () => {
  modal.style.display = 'none'
}

modal.addEventListener('click', closeModal)

modalBtn.addEventListener('click', openModal)
close.addEventListener('click', closeModal)