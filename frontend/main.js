const loginBtn = document.getElementById("loginBtn");
let inputName = document.getElementById("inputName");

loginBtn.addEventListener("click", login);

function login() {
    console.log("Hej hej!");
    let nameInLS = inputName.value;
    localStorage.setItem("userName", nameInLS);
}