document.getElementById('nav-burger').addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementsByClassName('nav-links-div')[0].classList.toggle('active')
})

document
  .getElementsByClassName('chat-profiles-mobile')[0]
  .addEventListener('click', () => {
    document.getElementsByClassName('chat-profiles-mobile')[0].style.display =
      'none'
    document.getElementsByClassName('chat-menu-mobile')[0].style.display =
      'none'
    document.getElementsByClassName(
      'chat-box-container-mobile'
    )[0].style.display = 'block'
    document.getElementsByClassName(
      'chat-messages-container-mobile'
    )[0].scrollTop = document.getElementsByClassName(
      'chat-messages-container-mobile'
    )[0].scrollHeight
  })

document.getElementsByClassName(
  'message-box-desktop'
)[0].scrollTop = document.getElementsByClassName(
  'message-box-desktop'
)[0].scrollHeight
