const toggle = document.querySelector('.toggle')
const wrapper_navigation = document.querySelector('.wrapper-navigation')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  wrapper_navigation.classList.toggle('active')
})