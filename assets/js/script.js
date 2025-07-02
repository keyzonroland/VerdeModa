// Script para VerdeModa: Filtros de catálogo y accesibilidad mínima

document.addEventListener('DOMContentLoaded', function () {
  // Filtros de productos (simulación)
    const filtros = document.querySelectorAll('.filtro');
    filtros.forEach(filtro => {
    filtro.addEventListener('click', function () {
        filtros.forEach(f => f.classList.remove('filtro--activo'));
        this.classList.add('filtro--activo');
      // Aquí puedes filtrar productos según la categoría seleccionada
      // Por ahora, solo cambia el estado visual
    });
});

  // Accesibilidad: Navegación con tab
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.setAttribute('tabindex', '0');
});
});
