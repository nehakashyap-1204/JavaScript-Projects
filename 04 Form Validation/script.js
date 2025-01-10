let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let form = document.querySelector('#form');


form.addEventListener('submit', (e) => {
    let email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (username.value === "" || username.value == null) {
        e.preventDefault();
        document.getElementById("userError").innerHTML = "username is required";
    }
    if (email.value == "") {
        e.preventDefault();
        document.getElementById("emailError").innerHTML = "email is required";
    }
    else if (!email.value.match(email_check)) {
        e.preventDefault();
        document.getElementById("emailError").innerHTML = "enter valid email";
    }
    
    
    if (password.value == "") {
        e.preventDefault();
        document.getElementById("passError").innerHTML = "password is required";
    } else if (password.value.length <= 5) {
        e.preventDefault();
        document.getElementById("passError").innerHTML = "password must be more than 6 characters"; 
    }
})

































// function validateForm() {
//     if (username.value == "" || username.value == null) {
//         document.querySelector('#userError').innerHTML = "username is empty";
//         flag = 0;
//     } else if (username.value.length <= 3) {
//         document.querySelector('#userError').innerHTML = "please enter valid username";
//         flag = 0;
//     } else {
//         document.querySelector('#userError').innerHTML = "";
//         flag = 1;
//     }

//     if (password.value == "") {
//         document.querySelector('#passError').innerHTML = "password is empty";
//         flag = 0;
//     } else {
//         document.querySelector('#passError').innerHTML = "";
//         flag = 1;
//     }
    
//     if (flag == 1) {
//         return true;
//     } else {
//         return false;
//     }
// }