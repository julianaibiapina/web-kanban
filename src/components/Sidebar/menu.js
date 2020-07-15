const buttonOpenMenu = document.querySelector("#open_menu");

const buttonCloseMenu = document.querySelector("#close_menu");

const barraMenu = document.querySelector("#sidebar");

buttonOpenMenu.addEventListener("click", () =>{
    barraMenu.classList.remove("hide");
});