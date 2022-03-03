const buttonMenu = document.querySelector(".checkbox-menu");
buttonMenu.addEventListener('click', () => {
    const options = document.querySelectorAll(".menu-item");
    options.forEach(item => { 
        item.classList.toggle("hide");
    })
});