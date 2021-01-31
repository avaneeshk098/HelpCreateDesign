document.getElementById('nav-burger').addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementsByClassName('nav-links-div')[0].classList.toggle('active')
})
