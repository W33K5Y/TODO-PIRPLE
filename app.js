// ! VARIABLES 
// ! sections
const start = document.getElementById("start");
const signUp = document.getElementById("sign-up");
const login = document.getElementById("login");
const lobby = document.getElementById("lobby");
const todo = document.getElementById("todo");
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
    h1.addEventListener("click",backToStartPage)
};
// *logins
loginStartB.addEventListener("click", backTologin);
loginSignUpB.addEventListener("click", backTologin);
loginLoginB.addEventListener("click", backTologin);
// *sign ups
signUpStartB.addEventListener("click", loginStartNoneSignupFlex);
signUpSignUpB.addEventListener("click", loginStartNoneSignupFlex);
signUpLoginB.addEventListener("click", loginStartNoneSignupFlex);
// * logouts
logoutLobby.addEventListener("click",backToStartPage);
// ! FUNCTIONS FOR LISTNERS 
// ? creating functions to decide what section gets shown 
function backToStartPage(e){
    start.style.display = "flex";
    signUp.style.display = "none";
    login.style.display = "none";
    lobby.style.display = "none";
    todo.style.display = "none";
};
function backTologin(e) {
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
    todo.style.display="none";
    errorDisplay("none","#4f76ff","1rem");

}
function createNewToDoSection(e) {
    todo.style.display = "flex";
    signUp.style.display = "none";
    start.style.display = "none";
    login.style.display = "none";
    lobby.style.display = "none";
}

// todo creae a function that listens out for the users log in data and saves such data in local storage

// ! SIGN UP SECTION 
// * Form Variables 
const userFirstName = document.getElementById("userFirstName");
const userLastName = document.getElementById("userLastName");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const signupButton = document.getElementById("submit-sign-up");
const terms = document.getElementById("terms");
// ? constructor function to gather userinfo 
function signUpToApp(userFirstName,userLastName,userEmail,userPassword) {
this.userFirstName = userFirstName;
this.userLastName = userLastName;
this.userEmail = userEmail
this.userPassword = userPassword;
}
// ! function to display error if inputs are empty 
function errSubmit(){
  alert("all fields are required");
}
// ? gather userinfo on button click
signupButton.addEventListener("click", function(e) {
e.preventDefault();
  const firstName =  userFirstName.value;
  const lastName = userLastName.value;
  const email = userEmail.value;
  const password = userPassword.value;
 if (userFirstName.value === "") {errSubmit()
 } 
  else if(userLastName.value === "") {
    errSubmit()
  } else if (userEmail.value === "") {
    errSubmit()
  } else if(userPassword.value === "" ) {
    errSubmit()
  } else if(terms.checked === false ){
    alert("Make sure you agree to terms and conditions")
  } else {
    const userInfo = new signUpToApp(firstName,lastName,email,password);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    backTologin();
    userFirstName.value = "";
    userLastName.value = "";
    userEmail.value = "";
    userPassword.value = "";
    // window.location.reload();
  }


});


// ! LOGIN SECTION 
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginButton = document.getElementById("submit-login");
const getUserData = JSON.parse(localStorage.getItem('userInfo'));
// * img and error message for incorrect information
const warningIcon = document.getElementById("warning");
const errorMessage = document.getElementById("error-message");
let firstTimeUserMessage = document.querySelector("form + p");
// ! function to alert Error
function infoError(el1,el2,el3=null) {
return function displayAndBorder(x,y,z) {
    el1.style.display = x;
    el2.style.display = x; 
    el3.style.color = y;
    el3.style.borderColor = y;
    el3.style.borderRadius = z;
}
}
const errorDisplay = infoError(warningIcon,errorMessage,firstTimeUserMessage);
const checkEmail = getUserData.userEmail;
const checkPassword = getUserData.userPassword;
// ! LOGIN LISTENER
loginButton.addEventListener("click", function(e) {
    e.preventDefault();
    // ? retrieve back the object set on storage
loginPassword.value === checkPassword &&
loginEmail.value === checkEmail ? startLoginSignUpNoneLobbyFlex() :
errorDisplay("inline-block","#f73e42","0px");
// ? errorDisplay('none') in startLoginSignUpNoneLobbyFlex
loginPassword.value = "";
loginEmail.value = "";
})

// ! == lobby INITIAL  ==
const greenBlock = document.getElementById("green-block");
greenBlock.addEventListener("click",createNewToDoSection,true);
// !===================== TODO SECTION ===================================//

// * todo nav 
const todoBack = document.getElementById("todo-back-b");
const todologout = document.getElementById("todo-log-out-b");
// ! listener on todo nav 
todoBack.addEventListener("click", startLoginSignUpNoneLobbyFlex);
todologout.addEventListener("click", backToStartPage);
//*====== Variables *======//
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")
//*====== Event Listeners *======// 
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);
//* ======= Functions *======//

function addTodo(e){
  e.preventDefault();
//! ToDo Div  
 const todoDiv = document.createElement('div');
 todoDiv.classList.add('todo');
// ! Create LI
const newTodo = document.createElement('li');
 newTodo.innerText = todoInput.value;
 newTodo.classList.add("todo-item");
 todoDiv.appendChild(newTodo);
//  ! ADD TODO TO LOCAL STORAGE
saveLocalTodos(todoInput.value);
 // ! CHECK MARK BUTTON
 const completedButton = document.createElement("button");
 completedButton.innerHTML = `<i class="fas fa-check"></i>`;
 completedButton.classList.add("complete-btn");
 todoDiv.appendChild(completedButton);
  // ! CHECK trash BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
//! APPEND TO LIST
todoList.appendChild(todoDiv);
// ! CLEAR TODO INPUT.VALUE
todoInput.value = "";
}

function deleteCheck(e) {
const item = e.target;
// ! DELETE TODO
if(item.classList[0] === "trash-btn") {
const todo = item.parentElement;
//* Animation
todo.classList.add("fall");
removeLocalTodos(todo);
todo.addEventListener("transitionend", function(){
todo.remove();
});
}
// ! CHECKMARK
if(item.classList[0] === "complete-btn" ) {
  const todo = item.parentElement;
  todo.classList.toggle("completed");
}
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value) {
      case "all": 
      todo.style.display = "flex";
      break;
      case "completed":
        if(todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else{
          todo.style.display = "none";
        }
      break;
        case "uncompleted": 
        if(!todo.classList.contains("completed")) {
          todo.style.display = "flex";

        } else{
          todo.style.display = "none";
        }
    } 
  });
}

function saveLocalTodos(todo){
  // !CHECK----Hey do i already have something in storage?
  let todos;
  if(localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(todos))
}

function getTodos() {
  // !CHECK----Hey do i already have something in storage?
  let todos;
  if(localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
todos.forEach(function (todo){
//! ToDo Div  
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');
// ! Create LI
const newTodo = document.createElement('li');
newTodo.innerText = todo;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

// ! CHECK MARK BUTTON
const completedButton = document.createElement("button");
completedButton.innerHTML = `<i class="fas fa-check"></i>`;
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
 // ! CHECK trash BUTTON
 const trashButton = document.createElement("button");
 trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
 trashButton.classList.add("trash-btn");
 todoDiv.appendChild(trashButton);
//! APPEND TO LIST
todoList.appendChild(todoDiv);
})
}

function removeLocalTodos(todo) {
  // !CHECK----Hey do i already have something in storage?
  let todos;
  if(localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
 const todoIndex = todo.children[0].innerText;
 console.log(todos.splice(todos.indexOf(todoIndex), 1));
 localStorage.setItem("todos", JSON.stringify(todos))
}

// !SAVE BUTTON SECTION / ADDING NEW LISTS 


// ! Save Button 
const saveButton = document.getElementById("submit-save");
const myLists = document.getElementById("my-lists");
const startNote = document.getElementById("start-note");
const listName = document.getElementById("new-list-name");
const myUl = document.getElementById("my-ul-lists");

// ! savebutton listener
saveButton.addEventListener("click", addNewTodoList);


// ! =============== function for creating new todo ================================
        function addNewTodoList(e) {
          e.preventDefault();
        const todoDiv = document.querySelector(".todo-container");
        const todos = document.querySelectorAll(".todo-item");
        const newTodoDiv = document.createElement("div");
        const newTodoOl = document.createElement("ol");
        const newTodoLi = document.createElement("li");
        const listH1 = document.createElement("h4");
        let todoList = [];
        // ! Create LI
        todos.forEach(function(todo) {
        const newTodo = document.createElement('li');
        newTodo.innerHTML = todo.innerHTML;
        newTodo.classList.add("todo-saved-item");
        newTodoOl.appendChild(newTodo);
        todoList.push(todo.innerText);
        }); 
        listName.value ? listH1.innerHTML = listName.value : listH1.innerHTML = "My List";
        newTodoDiv.classList.add("new-todo-div");
        newTodoDiv.appendChild(listH1);
        newTodoDiv.appendChild(newTodoOl);
        myLists.appendChild(newTodoDiv);
        todoReset(todoDiv,startNote);
        listName.value = "";
        localStorage.setItem("savedItems",JSON.stringify(todoList));
        // todo get the title somehow for each list localStorage.setItem("")
        startLoginSignUpNoneLobbyFlex();
        addEffectsToDivs();
        }

function todoReset(div,lobbyDiv) {
  lobbyDiv.remove();
  div.firstElementChild.innerHTML = "";
}

function addEffectsToDivs(){
  const newTodoDivs = document.querySelectorAll(".new-todo-div");
  for(const div of newTodoDivs) {
     div.classList.add("mouseover");
     div.addEventListener("click",function(){
      createNewToDoSection();
      const todoDiv = document.querySelector(".todo-container");
        amendList(div); 
        
     })
  }

}


 function amendList(div){
  const todos = document.querySelectorAll(".todo-saved-item");
  const listName = document.getElementById("new-list-name");
  const h4 = div.firstElementChild.innerText;
  todos.forEach(function (todo){
    //! ToDo Div  
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // ! Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todo.innerText;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); 
    // ! CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
     // ! CHECK trash BUTTON
     const trashButton = document.createElement("button");
     trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
    //! APPEND TO LIST
    todoList.appendChild(todoDiv);
    }) 
    listName.setAttribute(`placeholder`,`${h4}`);
    div.remove();
}

