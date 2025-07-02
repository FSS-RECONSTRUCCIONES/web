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
document.addEventListener("DOMContentLoaded", function () {
  const botonFormulario = document.getElementById("mostrar-formulario");
  const formulario = document.getElementById("formulario-contacto");

  // Asegura que está oculto al cargar
  formulario.style.display = "none";

  botonFormulario.addEventListener("click", function () {
    if (formulario.style.display === "none" || formulario.style.display === "") {
      formulario.style.display = "block";
    } else {
      formulario.style.display = "none";
    }
  });
});


window.addEventListener('scroll', () => {
  const img = document.getElementById('imagen-lateral');
  const formulario = document.getElementById('formulario-contacto');

  // Comprobar si el formulario está visible
  const formularioVisible = formulario.style.display === 'block';

  if (formularioVisible) {
    const scrollY = window.scrollY;
    const desplazamiento = scrollY * 1.09; // ajusta la velocidad aquí
    img.style.transform = `translateY(${desplazamiento}px)`;
  } else {
    // Si el formulario NO está visible, no mover la imagen (la posicionamos en 0)
    img.style.transform = 'translateY(0)';
  }
});