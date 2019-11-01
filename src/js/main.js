console.log("it works");

const hamburger = document.querySelector("#hamburger");
const drawer = document.querySelector("#drawer");
hamburger.addEventListener("click", () => {
  drawer.classList.toggle("menu-display");
  console.log("clicked");
});
