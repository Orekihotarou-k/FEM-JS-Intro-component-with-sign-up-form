let form = document.getElementById('form')
let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let password = document.getElementById('password')
// let submitBtn = document.getElementById('submit')

form.addEventListener('claim your free trial', e => {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const firstnameValue = firstname.value.trim()    
    const lastnameValue = lastname.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if (firstnameValue === ''){
        setErrorFor(firstname, 'First Name cannot be empty')
    }

    if (lastnameValue === ''){
        setErrorFor(lastname, 'Last Name cannot be empty')
    }

    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be empty')
    }

    if (passwordValue === ''){
        setErrorFor(password, 'Password cannot be empty')
    }
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formcontrol.querryselector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

