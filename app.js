// ! VARIABLES 
// ! sections
const start = document.getElementById("start");
const signUp = document.getElementById("sign-up");
const login = document.getElementById("login");
const lobby = document.getElementById("lobby");
// ! clickables 
// * start
const h1Button = document.querySelectorAll(".h1-b");
const loginStartB = document.getElementById("login-start-b")
const signUpStartB = document.getElementById("sign-up-start-b");
// * sign-up
const loginSignUpB = document.getElementById("login-sign-up-b")
const signUpSignUpB = document.getElementById("sign-up-sign-up-b");
// * login
const loginLoginB = document.getElementById("login-login-b")
const signUpLoginB= document.getElementById("sign-up-login-b");
// * lobby
const logoutLobby = document.getElementById("logout-lobby-b");

// ! SETTING LISTENERS on all clickable nav el's 
// ? this bellow is iterating through each case of the three identicle section h1's 
//* h1's
for (const h1 of h1Button) {
    h1.addEventListener("click",signupLoginNone)
};
// *logins
loginStartB.addEventListener("click", signupStartNoneLoginFlex);
loginSignUpB.addEventListener("click", signupStartNoneLoginFlex);
loginLoginB.addEventListener("click", signupStartNoneLoginFlex);
// *sign ups
signUpStartB.addEventListener("click", loginStartNoneSignupFlex);
signUpSignUpB.addEventListener("click", loginStartNoneSignupFlex);
signUpLoginB.addEventListener("click", loginStartNoneSignupFlex);
// * logouts
logoutLobby.addEventListener("click",signupLoginNone);
// ! FUNCTIONS FOR LISTNERS 
// ? creating functions to decide what section gets shown 
function signupLoginNone(e){
    start.style.display = "flex";
    signUp.style.display = "none";
    login.style.display = "none";
    lobby.style.display = "none";
};
function signupStartNoneLoginFlex(e) {
    login.style.display = "flex";
    start.style.display = "none";
    signUp.style.display = "none";
    lobby.style.display = "none";
}
function loginStartNoneSignupFlex(e) {
    signUp.style.display = "flex";
    start.style.display = "none";
    login.style.display = "none";
    lobby.style.display = "none";
}
function startLoginSignUpNoneLobbyFlex(e) {
    lobby.style.display = "flex";
    signUp.style.display = "none";
    start.style.display = "none";
    login.style.display = "none";
    errorDisplay("none");

}

// todo creae a function that listens out for the users log in data and saves such data in local storage

// ! SIGN UP SECTION 
// * Form Variables 
const userFirstName = document.getElementById("userFirstName");
const userLastName = document.getElementById("userLastName");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const signupButton = document.getElementById("submit-sign-up");

// ? constructor function to gather userinfo 
function signUpToApp(userFirstName,userLastName,userEmail,userPassword) {
this.userFirstName = userFirstName;
this.userLastName = userLastName;
this.userEmail = userEmail
this.userPassword = userPassword;
}

// ? gather userinfo on button click
signupButton.addEventListener("click", function(e) {
e.preventDefault();
  const firstName =  userFirstName.value;
  const lastName = userLastName.value;
  const email = userEmail.value;
  const password = userPassword.value;
  const userInfo = new signUpToApp(firstName,lastName,email,password);
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  startLoginSignUpNoneLobbyFlex();
  userFirstName.value = "";
userLastName.value = "";
userEmail.value = "";
userPassword.value = "";
});

// ! LOGIN SECTION 
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginButton = document.getElementById("submit-login");
const getUserData = JSON.parse(localStorage.getItem('userInfo'));
// * img and error message for incorrect information
const warningIcon = document.getElementById("warning");
const errorMessage = document.getElementById("error-message");
// ! function to alert Error
function infoError(warn,error) {
return function(x) {
    warn.style.display = x;
    error.style.display = x; 
}
}
const errorDisplay = infoError(warningIcon,errorMessage);

loginButton.addEventListener("click", function(e) {
    e.preventDefault();
    // ? retrieve back the object set on storage
loginPassword.value === getUserData.userPassword &&
loginEmail.value === getUserData.userEmail ? startLoginSignUpNoneLobbyFlex() :
errorDisplay("inline-block");
// ? errorDisplay('none') in startLoginSignUpNoneLobbyFlex
loginPassword.value = "";
loginEmail.value = "";
})

