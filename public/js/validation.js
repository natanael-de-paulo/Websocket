let inputValidationFails = []
const form = document.forms.loginForm

function bla(e) {
  // e.preventDefault()
  inputValidationFails = []
  const { name, email } = form

  console.log('data', name, email)

  clearAllValidations()

  validationNotNull({
    inputName: 'name',
    value: name.value
  })

  validationInvalidEmail('email', email.value)

  validationNotNull({
    inputName: 'email',
    value: email.value
  })

  if (inputValidationFails.length > 0) {
    return false
  }

  console.log('sucesso')
  return true
}

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

function validationInvalidEmail(nome, value) {
  const element = document.getElementsByName(nome)[1]
  const message = 'E-mail inválido'

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return
  }

  inputValidationFails.push({
    name: nome,
    error: message
  })

  element.textContent = message
}
