const sayHiBtn = document.querySelector(".say-hi-button");
const greeting = document.querySelector(".greeting");

sayHiBtn.addEventListener("click", () => {
  greeting.textContent = "Hello, Guy!!";
});
