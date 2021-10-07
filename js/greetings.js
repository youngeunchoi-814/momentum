
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";

function onLoginSubmit(event){
    event.preventDefault(); //어떤 이벤트의 기본 행동이든지 발생되지 않도록 막는 것
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
   
}

function paintGreeting(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
   paintGreeting(savedUsername);
   
}



