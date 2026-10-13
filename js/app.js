const menuButton = document.querySelector(".boton-menu");
const sidebar = document.querySelector("#sidebar");

menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    sidebar.classList.toggle("is-open", !isExpanded);
});

sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        sidebar.classList.remove("is-open");
    });
});