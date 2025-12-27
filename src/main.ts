const triggers = document?.querySelectorAll('.accordion__trigger')

document.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement &&
    event.target.closest('.accordion__trigger:not([open])')
  ) {
    triggers.forEach(t => {
      t.removeAttribute('open')
    })
    event.target.setAttribute('open', '')
  }
})