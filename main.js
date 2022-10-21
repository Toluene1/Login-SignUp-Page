let signUpForm = document.getElementById("signUpForm");
let logInForm = document.getElementById("logInForm");
let dashboardForm = document.getElementById("dashboard");
let displayDash = document.getElementById("displayDash");

document.getElementById("signup1").addEventListener("click", signUpButton);
function signUpButton() {
    signUpForm.classList = "d-block";
    logInForm.classList = "d-none";
    dashboardForm.classList = "d-none";
}

document.getElementById("login1").addEventListener("click", loginButton);
function loginButton() {
    signUpForm.classList = "d-none";
    logInForm.classList = "d-block";
    dashboardForm.classList = "d-none";
}

document.getElementById("dashboard1").addEventListener("click", logoutButton);
function logoutButton() {
    signUpForm.classList = "d-none";
    logInForm.classList = "d-none";
    dashboardForm.classList = "d-block";
}
// The function to run through the sign Up details
let detail = [];
function signUpclick() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPass = document.getElementById("userPass").value;
    let emailAlert = document.getElementById("emailAlert");

    let newuser = false;
    for (let index = 0; index < detail.length; index++) {
        if (detail[index].userEmail == userEmail) {
            newuser = true;
        }
    }
    if (userEmail.includes("@") && userPass.length >= 6 && newuser === false) {
        let userDetails = { firstName, lastName, userEmail, userPass };
        detail = getLocalstorage()
        detail.push(userDetails);
        localStorage.setItem("usersDetail", JSON.stringify(detail));
        console.log(detail);
        signUpForm.classList = "d-none";
        logInForm.classList = "d-block";
        document.getElementById("passW").classList = "d-none";
        document.getElementById("emailAlert").classList = "d-none";
        document.getElementById("show").classList = "d-none";
    } else if (userPass.length <= 6) {
        document.getElementById("passW").innerText =
            "password must not be less than 6";
    } else if (!userEmail.includes("@")) {
        document.getElementById("emailAlert").innerText = "email must include @";
    } else {
        document.getElementById("show").innerText = "acc already registered";
    }
}
// Function to check received data from sign-Up and validate before saving to local storage
function loginDetails() {
    let checkemail = document.getElementById("loginEmail").value;
    let checkpass = document.getElementById("loginPass").value;
    let usersInfo = localStorage.getItem("usersDetail");
    let usersInfotoArray = JSON.parse(usersInfo);

    for (let index = 0; index < usersInfotoArray.length; index++) {
        if (
            usersInfotoArray[index].userEmail === checkemail &&
            usersInfotoArray[index].userPass === checkpass
        ) {
            displayDash.innerText =
                "hello " +
                "Mr/Mrs " +
                usersInfotoArray[index].lastName + " " +
                "Welcome To Toluene Group of Companies";
            logInForm.classList = "d-none";
            signUpForm.classList = "d-none";
            dashboardForm.classList = "d-block";
            document.getElementById("checkLogin").classList = "d-none";
        } else {
            document.getElementById("checkLogin").innerHTML =
                "Email or password Incorrect";
        }
    }
}
// this function is to  retain details already in local storage
function getLocalstorage() {
    if (localStorage.getItem("usersDetail") !== null) {
        return JSON.parse(localStorage.getItem("usersDetail"))
    }
    else {
        return []
    }
}

// Final function to take us back to the sign-up page 
function logOut() {
    signUpForm.classList = "d-block";
    logInForm.classList = "d-none";
    dashboardForm.classList = "d-none";
}