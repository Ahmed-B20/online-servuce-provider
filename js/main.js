// start nav
let btn = document.getElementById("toggle");
let nav = document.querySelector(".navbar");
let list = document.querySelectorAll(".one");

list.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".one.active").classList.remove("active");
    e.classList.add("active");
    btn.classList.toggle("fa-times");
    nav.classList.toggle("nav-toggle");
  });
});

btn.addEventListener("click", () => {
  btn.classList.toggle("fa-times");
  nav.classList.toggle("nav-toggle");
});

window.onscroll = () => {
  btn.classList.remove("fa-times");
  nav.classList.remove("nav-toggle");
};
// end nav
