const correctpassword = "Flowers";
function onLoginClick() {
    let usernameinput = document.getElementById("username");
    let passwordinput = document.getElementById("password");
    let username = usernameinput.value
    let password = passwordinput.value
    if (isCorrect(password)) {
        login(username, password)
    } 
}
function isCorrect(password) {
    return password == correctpassword 
}
function login(username, password) {
localStorage.setItem("username", username)
localStorage.setItem("password", password)
}
function isLoggedIn() {
   let password =  localStorage.getItem("password")
   if (password == null) {
       return false
   }
   return isCorrect(password)
}
function sendToLogin() {
    let loggedin = isLoggedIn()
    if (!loggedin) {
        location.replace("/src/index.html")
    } 
}
function sendToLogout() {
    let loggedin = isLoggedIn()
    if (loggedin) {
        location.replace("/src/logout/logout.html")
    } 
}