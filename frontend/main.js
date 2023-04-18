const loginBtn = document.getElementById("loginBtn");
let input = document.getElementById("inputName");

loginBtn.addEventListener("click", login);

function login() {
    console.log("Hej hej!");
    let value = input.value;
    localStorage.setItem("userName", value);
}