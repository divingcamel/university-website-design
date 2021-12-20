/* ===============
    header & nav 
   =============== */

const menuCloseBtn = document.getElementById("menuCloseBtn");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const menu = document.querySelector(".nav-links");

// open menu
hamburgerMenu.addEventListener("click", ()=>{
    menu.style.right = "0";
});
// close menu
menuCloseBtn.addEventListener("click", ()=>{
    menu.style.right = "-200px";
});