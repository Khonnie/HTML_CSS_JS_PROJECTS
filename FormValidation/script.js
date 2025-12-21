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
    const confirmpasswordvalue = confirmpasswordinput.value.trim();;

    const userinputs = [usernamevalue, emailvalue, passwordvalue, confirmpasswordvalue]
    const labels = ['USername', 'Email', 'Password', 'Confirm Password']
    const spans = [usernamespan, emailspan, passwordspan, confirmpasswordspan]
    const inputs = [usernameinput, emailinput, passwordinput, confirmpasswordinput]
    
    for(let i = 0; i<userinputs.length; i++){
        if (userinputs[i].length === 0) {
        showUserInputerror( labels[i], spans[i], inputs[i]) 
    }   else {
       clearError(spans[i], inputs[i]) 
    }
    }
    //should run the below code if the userinput is not empty ie ONLY check length if the field isn't empty
    if (usernamevalue.length > 0){
        if(usernamevalue.length < 5){
        usernamespan.textContent = 'Username must be at least 5 characters'
        usernamespan.classList.add('visible')
        usernameinput.classList.add('invalid')
        usernameinput.classList.remove('valid')
    }
        else{
        usernameinput.classList.add('valid')
        usernamespan.classList.remove('visible')
        usernameinput.classList.remove('invalid')
    }
    }
    if (emailvalue.length > 0)
        if(emailvalue.includes('@gmail.com')){
        emailinput.classList.add('valid')
        emailspan.classList.remove('visible')
        emailinput.classList.remove('invalid')
        }
        else{
            emailspan.classList.add('visible')
            emailspan.textContent = 'Email not valid'
            emailinput.classList.add('invalid')
            emailinput.classList.remove('valid')
        }
    if (passwordvalue.length > 0){
        if(passwordvalue === confirmpasswordvalue && passwordvalue.length > 8){
            passwordinput.classList.add('valid')
            confirmpasswordinput.classList.add('valid')
            passwordinput.classList.remove('invalid')
            confirmpasswordinput.classList.remove('invalid')
            passwordspan.classList.remove('visible')
            confirmpasswordspan.classList.remove('visible')
        }
        else{
            passwordinput.classList.add('invalid')
            confirmpasswordinput.classList.add('invalid')
            passwordspan.classList.add('visible')
            confirmpasswordspan.classList.add('visible')
            passwordspan.textContent = 'Password not Valid'
            confirmpasswordspan.textContent = 'Passwords donot Match'
            passwordinput.classList.remove('valid')
            confirmpasswordinput.classList.remove('valid')
        }
    }

    function showUserInputerror(userinputlabel, span, input){
        span.textContent = userinputlabel + " is required";
        span.classList.add('visible');
        input.classList.add('invalid');
    }

    function clearError(span, input){
        span.classList.remove('visible');
        input.classList.remove('invalid');
    }

}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    formvalidation();
});