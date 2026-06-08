function openMenu() {
    document.getElementById("sideMenu").classList.add("active");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const status = document.getElementById("status");
    status.textContent = "Message Sent!";
    status.style.color = "green";

    this.reset();
});
