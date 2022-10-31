let openbutton = document.querySelector(".menu-button");
let closebutton = document.querySelector(".bi-x");
let navbarMob = document.querySelector(".mobile-menu");

openbutton.addEventListener("click",function(){
    openbutton.style.display="none";
    navbarMob.style.display="flex";
})
closebutton.addEventListener("click",function(){
    navbarMob.style.display="none";
    openbutton.style.display="flex";
})


