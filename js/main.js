let elHeader = document.querySelector(".account");
let elHeaderHamburgBtn = document.querySelector(".account__span");

elHeaderHamburgBtn.addEventListener('click', function(){
    elHeader.classList.toggle("account--opener");
})