// variables
const sendBtn = document.querySelector('#sendBtn'),
    email = document.querySelector('#email'),
    subject = document.querySelector('#subject'),
    message = document.querySelector('#message'),
    resetBtn = document.querySelector('#resetBtn'),
    form = document.querySelector('#email-form')
    // eventlisteners
eventListeners()

function eventListeners() {
    document.addEventListener('DOMContentLoaded', appInit)

    email.addEventListener('blur', validatefileds)
    subject.addEventListener('blur', validatefileds)
    message.addEventListener('blur', validatefileds)

    //reset btn
    resetBtn.addEventListener('click', resetForm)
    form.addEventListener('submit', submitForm)

}




//functions

function appInit() {
    sendBtn.disabled = true
}

function submitForm(e) {
    e.preventDefault()


    const spinnersAlt = document.querySelector('#spinner')
    spinnersAlt.style.display = 'block'
    //make img tag 
    const sendEmail = document.createElement('img')

    sendEmail.src = ('../img/check.gif')

    sendEmail.style.display = 'block'


    setTimeout(function () {
        // hide first spinner
        spinnersAlt.style.display = "none";

        // append image to the HTML
        const loaders = document.querySelector("#loaders");
        loaders.appendChild(sendEmail);

        // reset form and remove
        setTimeout(() => {
            resetForm(e);
            sendEmail.remove();
        }, 3000);
    }, 2000);
}


function validatefileds() {


    validateLength(this)
    if (this.type === 'email') {
        validateEmail(this)
    }
    let error = document.querySelectorAll('.error')
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        if (error.length === 0) {
            sendBtn.disabled = false
        }
    }

}

function validateLength(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green'
        field.classList.remove('error')
    } else {
        field.style.borderBottomColor = 'red'
        field.classList.add('error')
    }
}

function validateEmail(field) {
    const emailText = field.value
    if (emailText.includes('@')) {
        field.style.borderBottomColor = 'green'
        field.classList.remove('error')
    } else {
        field.style.borderBottomColor = 'red'
        field.classList.add('error')
    }
}

//reset all field with button

function resetForm(e) {
    e.preventDefault();
    form.reset();
}