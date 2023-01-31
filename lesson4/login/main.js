const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const textAlert = document.getElementById("alert")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const loginData = {
        login: 'admin',
        password: 'qwerty'
    }
    const handleSubmit =(text,color)=>{
        textAlert.innerHTML = text
        loginForm.style.backgroundColor = color;
    }
    if (username === loginData.login && password === loginData.password) {
        handleSubmit('Success', 'green')
    } else {
        handleSubmit('Error', 'red')
    }
})