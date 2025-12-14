const usernameinput = document.getElementById('username');
const usernamespan = document.getElementById('usernameError');

const form = document.getElementById('validationForm');

const emailinput = document.getElementById('email');
const emailspan = document.getElementById('emailError');

const passwordinput = document.getElementById('password');
const passwordspan = document.getElementById('passwordError');

const confirmpasswordinput = document.getElementById('confirmpassword');
const confirmpasswordspan = document.getElementById('confirmpasswordError');

const regbutton = document.getElementById('reg-btn');


function formvalidation() {
    const usernamevalue = usernameinput.value.trim();
    const emailvalue = emailinput.value.trim();
    const passwordvalue = passwordinput.value.trim();
    const confirmpasswordvalue = confirmpasswordinput.value.trim();

    // USERNAME
    if (usernamevalue.length === 0) {
        usernamespan.textContent = "Username is required";
        usernamespan.classList.add('visible');
        usernameinput.classList.add('invalid');
        
    } else {
        usernamespan.classList.remove('visible');
        usernameinput.classList.remove('invalid');
    }

    // EMAIL
    if (emailvalue.length === 0) {
        emailspan.textContent = "Email is required";
        emailspan.classList.add('visible');
        emailinput.classList.add('invalid');
        
    } else {
        emailspan.classList.remove('visible');
        emailinput.classList.remove('invalid');
    }

    // PASSWORD
    if (passwordvalue.length === 0) {
        passwordspan.textContent = "Password is required";
        passwordspan.classList.add('visible');
        passwordinput.classList.add('invalid');
        
    } else {
        passwordspan.classList.remove('visible');
        passwordinput.classList.remove('invalid');
    }

    // CONFIRM PASSWORD
    if (confirmpasswordvalue.length === 0) {
        confirmpasswordspan.textContent = "Confirm Password is required";
        confirmpasswordspan.classList.add('visible');
        confirmpasswordinput.classList.add('invalid');
        
    } else {
        confirmpasswordspan.classList.remove('visible');
        confirmpasswordinput.classList.remove('invalid');
    }

}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    formvalidation();
});