console.log("it works");
window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hamburger");
  const drawer = document.querySelector("#drawer");
  hamburger.addEventListener("click", () => {
    drawer.classList.toggle("display");
    console.log("clicked");
  });
});
