let burger = document.querySelector("#navbar > .burger");
let ul = document.querySelector("#navbar > ul");

burger.onclick = () => {
  // toggle the burger
  burger.classList.toggle("burger-active");
  // toggle the nav menu
  ul.classList.toggle("nav-active");
};
