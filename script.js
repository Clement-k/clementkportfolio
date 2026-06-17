function openMenu() {
    document.getElementById("sideMenu").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}


function openMenu() {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}
