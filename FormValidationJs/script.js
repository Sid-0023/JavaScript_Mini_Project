let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("submit-btn");

let usernameMesg = document.getElementById("username-error");
let emailMesg = document.getElementById("email-error");
let passwordMesg = document.getElementById("password-error");

let errorMessage = document.querySelector(".error");  // general error (optional, remove if unused)

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();

  // Reset previous error messages
  usernameMesg.textContent = "";
  emailMesg.textContent = "";
  passwordMesg.textContent = "";

  // Username validation
  if (usernameValue === "") {
    usernameMesg.textContent = "Username is required";
    username.style.border = "1px solid red";
  } else {
    username.style.border = "1px solid #ccc";
  }

  // Email validation
  if (emailValue === "") {
    emailMesg.textContent = "Email is required";
    email.style.border = "1px solid red";
  } else if (!emailValue.includes("@") || !emailValue.includes(".com")) {
    emailMesg.textContent = "Please enter a valid email address.";
    email.style.border = "1px solid red";
  } else {
    email.style.border = "1px solid #ccc";
  }

  // Password validation
  if (passwordValue === "") {
    passwordMesg.textContent = "Password is required";
    password.style.border = "1px solid red";
  } else {
    password.style.border = "1px solid #ccc";
  }
});
