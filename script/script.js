const submitButton = document.querySelector('.contact__item__contact__button')
const errorText = document.querySelector('.contact__item__contact__error')
const emailInput = document.querySelector('.contact__item__contact__input')

let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const formValidation = () => {
    if (mailFormat.test(emailInput.value)) {
        emailInput.value = ''
        if (emailInput.classList.contains('input-error')) {
            emailInput.classList.remove('input-error')
            errorText.style.visibility = 'hidden'
        }
    } else {
        emailInput.classList.add('input-error')
        errorText.style.visibility = 'visible'
    }
}


submitButton.addEventListener("click", () => {
    formValidation()
})