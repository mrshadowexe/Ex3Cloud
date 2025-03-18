function signup() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user && pass) {
        localStorage.setItem(user, pass);
        alert("Signup Successful!");
        window.location.href = "login.html";
    } else {
        alert("Fill all fields!");
    }
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;
    if (localStorage.getItem(user) === pass) {
        localStorage.setItem("loggedInUser", user);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Credentials!");
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}
