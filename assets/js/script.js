// Script para VerdeModa: Filtros de catálogo y accesibilidad mínima

// Datos de productos de ejemplo
const productos = [
{
    nombre: "Vestido Ecológico",
    descripcion: "Hecho con algodón orgánico.",
    imagen: "assets/img/vestido1.jpg",
    categoria: "vestuario"
},
{
    nombre: "Bolso Reciclado",
    descripcion: "Fabricado con materiales reciclados.",
    imagen: "assets/img/bolso1.jpg",
    categoria: "accesorios"
},
{
    nombre: "Polera Orgánica",
    descripcion: "Polera 100% algodón orgánico.",
    imagen: "assets/img/polera1.jpg",
    categoria: "vestuario"
},
{
    nombre: "Gorro Eco",
    descripcion: "Gorro tejido con fibras naturales.",
    imagen: "assets/img/gorro1.jpg",
    categoria: "accesorios"
}
];

function renderProductos(filtro = "todos") {
    const contenedor = document.querySelector('.catalogo__productos');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    const filtrados = filtro === "todos" ? productos : productos.filter(p => p.categoria === filtro);
    if (filtrados.length === 0) {
    contenedor.innerHTML = '<p>No hay productos en esta categoría.</p>';
    return;
}
filtrados.forEach(producto => {
    contenedor.innerHTML += `
    <article class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="producto__img">
        <h3 class="producto__nombre">${producto.nombre}</h3>
        <p class="producto__desc">${producto.descripcion}</p>
        <button class="producto__btn">Ver más</button>
    </article>
    `;
});
}

document.addEventListener('DOMContentLoaded', function () {
  // Filtros de productos (simulación)
    const filtros = document.querySelectorAll('.filtro');
    filtros.forEach(filtro => {
    filtro.addEventListener('click', function () {
        filtros.forEach(f => f.classList.remove('filtro--activo'));
        this.classList.add('filtro--activo');
    const categoria = this.dataset.categoria;
    renderProductos(categoria);
    });
});

  // Mostrar todos los productos al cargar
renderProductos();

  // Accesibilidad: Navegación con tab
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.setAttribute('tabindex', '0');
});
});
