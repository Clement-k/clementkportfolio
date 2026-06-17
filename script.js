// OPEN MENU
function openMenu() {
    document.getElementById("sideMenu").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

// CLOSE MENU
function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

// CLOSE MENU WHEN ESC IS PRESSED
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeMenu();
    }
});
