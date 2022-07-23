// let inputValidationFails = []
// const form = document.forms.formData

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   inputValidationFails = []

//   const { userName, userEmail } = form

//   console.log('data', userName, userEmail)

//   clearAllValidations()

//   validationNotNull({
//     inputName: 'userName',
//     value: userName.value
//   })

//   validationInvalidEmail('userName', userName.value)

//   validationNotNull({
//     inputName: 'email',
//     value: email.value
//   })

//   if (inputValidationFails.length > 0) {
//     return
//   }

//   console.log('Formulário enviado.')
// })

// function clearAllValidations() {
//   inputValidationFails = []

//   const elements = document.getElementsByClassName('form-validation')
//   console.log('ele', elements)

//   for (let i = 0; elements.length >= i; i++) {
//     const elements = document.querySelectorAll('p')

//     elements.forEach(e => {
//       if (e.getAttribute('class') === 'form-validation') {
//         e.textContent = ''
//       }
//     })
//   }
// }

// function validationNotNull({
//   inputName,
//   value,
//   inputElement,
//   enabledInputDisabled = true
// }) {
//   let element
//   const message = 'Este campo é obrigatório'

//   element = inputElement

//   if (!inputElement) {
//     element = document.getElementsByName(inputName)[0]
//   }

//   const elementDisabled = element.getAttribute('disabled')

//   if (enabledInputDisabled || (!enabledInputDisabled && !elementDisabled)) {
//     const errorElement = element.nextElementSibling

//     if (typeof value === 'string' && value) {
//       return
//     }

//     inputValidationFails.push({
//       name: inputName,
//       error: message
//     })

//     errorElement.textContent = message
//   }
// }

// function validationInvalidEmail(name, value) {
//   const element = document.getElementsByName(name)[1]
//   const message = 'E-mail inválido'

//   if (/\S+@\S+\.\S+/.test(value)) {
//     return
//   }

//   inputValidationFails.push({
//     name: name,
//     error: message
//   })

//   element.textContent = message
// }
