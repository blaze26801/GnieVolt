const btn = document.getElementById("hamburger-btn");
const nav = document.getElementById("nav-top");
const content = document.querySelector("main");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if(nav.classList.contains("active")) {
        content.style.paddingTop = nav.offsetHeight + "px";
    }else{
        content.style.paddingTop = null;
    }
});

nav.addEventListener("click", () => {
    nav.classList.remove("active");
});