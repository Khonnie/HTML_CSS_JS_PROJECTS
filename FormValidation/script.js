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


function formvalidation(){
    usernamevalue = usernameinput.value.trim();
    emailvalue = emailinput.value.trim();
    passwordvalue = passwordinput.value.trim();

    if (usernamevalue.length === 0 || emailvalue.length === 0 || passwordvalue.length === 0 || confirmpasswordinput.value.trim().length === 0) { 
        usernamespan.classList.add('visible');
        usernamespan.textContent = "Username is required";
        usernameinput.classList.add('invalid');

        emailspan.classList.add('visible');
        emailspan.textContent = "Email is required";
        emailinput.classList.add('invalid');

        passwordspan.classList.add('visible');
        passwordspan.textContent = "Password is required";
        passwordinput.classList.add('invalid');

        confirmpasswordspan.classList.add('visible');
        confirmpasswordspan.textContent = "Confirm Password is required";
        confirmpasswordinput.classList.add('invalid');

        return
    }
    
        usernamespan.classList.remove('visible');
        usernameinput.classList.remove('invalid');

        usernamevalue = "";
}
regbutton.addEventListener('submit', formvalidation);
form.addEventListener('submit', function (e) {
    e.preventDefault(); // STOP page refresh
    formvalidation();
});