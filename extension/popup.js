//This is the modal code taken from Web Dev Simplied! You can find the original code here: https://github.com/WebDevSimplified/Vanilla-JavaScript-Modal
//This is for future work :D Click on the Aerosol button to check it out though. 

const openAerosolButtons = document.querySelectorAll('[data-aerosol-target]')
const closeAerosolButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openAerosolButtons.forEach(button => {
  button.addEventListener('click', () => {
    const aerosol = document.querySelector(button.dataset.aerosolTarget)
    openAerosol(aerosol)
  })
})

overlay.addEventListener('click', () => {
  const aerosols = document.querySelectorAll('.aerosol.active')
  aerosols.forEach(aerosol => {
    closeAerosol(aerosol)
  })
})

closeAerosolButtons.forEach(button => {
  button.addEventListener('click', () => {
    const aerosol = button.closest('.aerosol')
    closeAerosol(aerosol)
  })
})

function openAerosol(aerosol){
  if (aerosol == null) return
  aerosol.classList.add('active')
  overlay.classList.add('active')
}

function closeAerosol(aerosol){
  if (aerosol == null) return
  aerosol.classList.remove('active')
  overlay.classList.remove('active')
}
