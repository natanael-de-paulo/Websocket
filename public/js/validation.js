let inputValidationFails = []
const form = document.forms.formData

form.addEventListener('submit', e => {
  e.preventDefault()
  inputValidationFails = []

  const { name, email, avatar } = form

  console.log('data', name, email, avatar)

  clearAllValidations()

  validationNotNull({
    inputName: 'name',
    value: name.value
  })

  validationInvalidEmail('email', name.value)

  validationNotNull({
    inputName: 'name',
    value: name.value
  })
  validationInvalidEmail('name', name.value)

  if (inputValidationFails.length > 0) {
    return
  }

  console.log('Formulário enviado.')
})

function clearAllValidations() {
  inputValidationFails = []

  const elements = document.getElementsByClassName('form-validation')
  console.log('ele', elements)

  for (let i = 0; elements.length >= i; i++) {
    const elements = document.querySelectorAll('p')

    elements.forEach(e => {
      if (e.getAttribute('class') === 'form-validation') {
        e.textContent = ''
      }
    })
  }
}

function validationNotNull({
  inputName,
  value,
  inputElement,
  enabledInputDisabled = true
}) {
  let element
  const message = 'Este campo é obrigatório'

  element = inputElement

  if (!inputElement) {
    element = document.getElementsByName(inputName)[0]
  }

  const elementDisabled = element.getAttribute('disabled')

  if (enabledInputDisabled || (!enabledInputDisabled && !elementDisabled)) {
    const errorElement = element.nextElementSibling

    if (typeof value === 'string' && value) {
      return
    }

    inputValidationFails.push({
      name: inputName,
      error: message
    })

    errorElement.textContent = message
  }
}
