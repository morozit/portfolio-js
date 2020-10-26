const nameInput = document.querySelector('#callback-form-input-name');
const emailInput = document.querySelector('#callback-form-input-email');
const phoneInput = document.querySelector('#callback-form-input-phone');

const callBackForm = document.querySelector('#cb-form');
const requestRecievedModal = document.querySelector('#request-received');


const DEFAULT_PHONE = '+380';

callBackForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let oneFieldNotValid = false;

    if (!isPhoneValid(phoneInput.value.trim())) {
        phoneInput.classList.add('cb-form__input-error');
        oneFieldNotValid = true;
    }

    if (!isEmailValid(emailInput.value.trim())) {
        emailInput.classList.add('cb-form__input-error');
        oneFieldNotValid = true;
    }

    if (!nameInput.value.trim()) {
        nameInput.classList.add('cb-form__input-error');
        oneFieldNotValid = true;
    }

    if (oneFieldNotValid) {
        return;
    }

    requestRecievedModal.classList.add('modal-active');
    phoneInput.value = '';
    emailInput.value = '';
    nameInput.value = '';
})

nameInput.addEventListener('change', function(event){
    const element = event.target; 

    if (!element.value.trim()) {
        element.classList.add('cb-form__input-error');
        return;
    }

    element.classList.remove('cb-form__input-error');
})

emailInput.addEventListener('change', function(event){
    const element = event.target; 

    if (!isEmailValid(element.value.trim())) {
        element.classList.add('cb-form__input-error');
        return;
    }

    element.classList.remove('cb-form__input-error');

})


phoneInput.addEventListener('click', function(event){
    const element = event.target; 

    if (!element.value || !element.value.trim()) {
        element.value = DEFAULT_PHONE;
    }
});

phoneInput.addEventListener('blur', function(event){
    const element = event.target; 

    if (element.value.trim() === DEFAULT_PHONE) {
        element.classList.add('cb-form__input-error');
        return;
    }

    element.classList.remove('cb-form__input-error');
});

phoneInput.addEventListener('change', function(event){
    const element = event.target; 

    if (!isPhoneValid(element.value.trim())) {
        element.classList.add('cb-form__input-error');
        return;
    }

    element.classList.remove('cb-form__input-error');

})




function isPhoneValid(phone = '') {
    const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;

    return phone.match(regexp);
}

function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}
