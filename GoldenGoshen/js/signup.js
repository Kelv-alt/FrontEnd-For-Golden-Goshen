const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_input = document.getElementById('repeat-input')


form.addEventListener('submit', (e) =>{

// e.preventDefault() prevent submit

    let errors = []

    if(firstname_input){
        //if we have a firstname input then we are in the signup
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_input.value)
    }
    else{
        //we are in login
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if(errors.lenght > 0){
        //if anny error in the arrays

    e.preventDefault()
    }
})

function  getSignupFormErrors(firstname,email,password,repeatPassword){
    let errors = []
    
    if(firstname === '' || firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null){
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}
