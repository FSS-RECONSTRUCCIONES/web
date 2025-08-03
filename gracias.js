function toggleMenu() {
    const submenu = document.getElementById("submenu");
    const arrow = document.getElementById("arrow-main");
    submenu.classList.toggle("show");
    arrow.classList.toggle("rotate");

    // Cierra todos los sub-submenús
    closeAllSubmenus();
}

function toggleSubmenu(event, submenuId, arrowId) {
    event.stopPropagation();

    const subSubmenu = document.getElementById(submenuId);
    const arrow = document.getElementById(arrowId);

    // Cierra otros sub-submenús antes de abrir este
    closeAllSubmenus(submenuId);

    subSubmenu.classList.toggle("show");
    arrow.classList.toggle("rotate-right");
}

function closeAllSubmenus(exceptId = "") {
    const submenus = ["sub-submenu-Peritación automoción", "sub-submenu-Peritación maquinaria industrial"];
    const arrows = ["arrow-sub-Peritación automoción", "arrow-sub-Peritación maquinaria industrial"];

    submenus.forEach((id, i) => {
    if (id !== exceptId) {
        document.getElementById(id).classList.remove("show");
        document.getElementById(arrows[i]).classList.remove("rotate-right");
    }
    });
}

window.onclick = function(event) {
    if (!event.target.closest('.menu')) {
    document.getElementById("submenu").classList.remove("show");
    document.getElementById("arrow-main").classList.remove("rotate");
    closeAllSubmenus();
    }
}



