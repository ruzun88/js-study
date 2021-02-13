const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function hanleSubmit(event) {
  event.preventDefault(); // 기본 동작을 막는다. 여기서는 input clear하고 새로고침을 막음
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue)
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", hanleSubmit)
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
      askForName();
    } else {
        paintGreeting(currentUser)
    }
}

function init() {
    loadName();
}

init();