let userName = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginButton");

loginBtn.addEventListener("click", () => {
  let userValue = userName.value;
  let parolValue = password.value;

  if (userValue === "fanzeeadmin" && parolValue === "ROOT VZ") {
    window.location.href = "admin/admin.html";
  } else {
    alert("Parol yoki login xato");
  }
});
