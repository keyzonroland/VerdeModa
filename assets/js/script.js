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
filtrados.forEach((producto, idx) => {
    contenedor.innerHTML += `
    <article class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="producto__img">
        <h3 class="producto__nombre">${producto.nombre}</h3>
        <p class="producto__desc">${producto.descripcion}</p>
        <p class="producto__tallas"><strong>Tallas:</strong> S, M, L, XL</p>
        <button class="producto__btn" onclick="mostrarFichaProducto(${idx})">Ver más</button>
    </article>
    `;
});
}

// Ficha de producto (modal simple)
function mostrarFichaProducto(idx) {
    const producto = productos[idx];
    const modal = document.createElement('div');
    modal.className = 'modal-producto';
    modal.innerHTML = `
    <div class="modal-producto__contenido">
        <span class="modal-producto__cerrar" tabindex="0">&times;</span>
        <img src="${producto.imagen}" alt="${producto.nombre}" class="producto__img">
        <h3 class="producto__nombre">${producto.nombre}</h3>
        <p class="producto__desc">${producto.descripcion}</p>
        <p class="producto__tallas"><strong>Tallas:</strong> S, M, L, XL</p>
        <a href="https://wa.me/56947476286?text=Hola,%20quiero%20comprar%20el%20producto:%20${encodeURIComponent(producto.nombre)}" class="producto__btn producto__btn--whatsapp" target="_blank">Comprar por WhatsApp</a>
    </div>
    `;
    document.body.appendChild(modal);
    // Cerrar modal
    modal.querySelector('.modal-producto__cerrar').onclick = () => modal.remove();
    modal.querySelector('.modal-producto__cerrar').onkeydown = (e) => { if(e.key === 'Enter' || e.key === ' ') modal.remove(); };
    modal.onclick = (e) => { if(e.target === modal) modal.remove(); };
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
