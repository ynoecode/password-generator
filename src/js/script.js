/**
 * ? Getting the element via ID and place them on a variable.
 */
const passwordOutputElement = document.getElementById("pw-output")
const buttonCopyElement = document.getElementById("btn-copy")
const passwordLengthElement = document.getElementById("pw-len")
const uppercaseElement = document.getElementById("uppercase")
const lowercaseElement = document.getElementById("lowercase")
const numbersElement = document.getElementById("numbers")
const symbolsElement = document.getElementById("symbols")
const generateButtonElement = document.getElementById("generate-pw")
const refreshIcon = document.getElementById("refresh-icon")
const toastElement = document.querySelector(".toast");

/**
 * ? Initiators.
 */
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_-+="

/**
 * ? Getting the settings that users input.
 */
let getUserSetting = {

  getUppercase: function () {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
  },
  
  getLowercase: function () {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
  },

  getNumbers: function () {
    return numbers[Math.floor(Math.random() * numbers.length)]
  },

  getSymbols: function () {
    return symbols[Math.floor(Math.random() * symbols.length)]
  },
}

/**
 * ? Generating password.
 */
let generate = {
  
  generatePassword: function () {

    const len = passwordLengthElement.value
    
    let password = ""

    if (uppercaseElement.checked) {
      password += getUserSetting.getUppercase()
    } 

    if (lowercaseElement.checked) {
      password += getUserSetting.getLowercase()
    } 

    if (numbersElement.checked) {
      password += getUserSetting.getNumbers()
    } 

    if (symbolsElement.checked) {
      password += getUserSetting.getSymbols()
    } 

    for(let i =password.length; i < len; i++) {
      const x = gettingUserSettings.generateSettings()
      password += x
    }
    
    passwordOutputElement.innerText = password
  },
}

/**
 * ? Getting settings or the selected radio button from the user.
 */
let gettingUserSettings = {

  generateSettings: function () {
    const arrayX = []

    if (uppercaseElement.checked) {
      arrayX.push(getUserSetting.getUppercase())
    }

    if (lowercaseElement.checked) {
      arrayX.push(getUserSetting.getLowercase())
    }

    if (numbersElement.checked) {
      arrayX.push(getUserSetting.getNumbers())
    }

    if (symbolsElement.checked) {
      arrayX.push(getUserSetting.getSymbols())
    }

    if (arrayX.length === 0) return ""

    return arrayX[Math.floor(Math.random() * arrayX.length)]
  } 
}

/**
 * ? When the buttun `Generate` is clicked, it will generate and shows the password generated.
 */
generateButtonElement.addEventListener('click', generate.generatePassword)


/**
 * ? Function `Clipboard`
 */
buttonCopyElement.addEventListener('click', function () {
  const textArea = document.createElement('textarea')
  const password = passwordOutputElement.innerText

  if (!password) return

  textArea.value = password
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand("copy")
  textArea.remove()
  /**
   * ? Toast
   */
  toastElement.querySelector(".toast-body").innerHTML = "Password copied to clibooard."
  toastElement.classList.add("visible")

  setTimeout(function () {
    toastElement.classList.replace("visible", "")}, 3000
  ) 
})