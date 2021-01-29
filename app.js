// ! VARIABLES 
// ! sections
const start = document.getElementById("start");
const signUp = document.getElementById("sign-up");
const login = document.getElementById("login");

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

// ! SETTING LISTENERS on all clickable nav el's 
// ? this bellow is iterating through each case of the three identicle section h1's 
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

// ! FUNCTIONS FOR LISTNERS 
// ? creating functions to decide what section gets shown 
function signupLoginNone(e){
    start.style.display = "flex";
    signUp.style.display = "none";
    login.style.display = "none";
};
function signupStartNoneLoginFlex(e) {
    login.style.display = "flex";
    start.style.display = "none";
    signUp.style.display = "none";
}
function loginStartNoneSignupFlex(e) {
    signUp.style.display = "flex";
    start.style.display = "none";
    login.style.display = "none";
}