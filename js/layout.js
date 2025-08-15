// Web Components para Navbar y Footer de VerdeModa
(function(){
  function getActive(pathname){
    const p = (pathname.split('/').pop() || 'index.html').split('#')[0].split('?')[0];
    return p || 'index.html';
  }

  class VmNavbar extends HTMLElement {
    connectedCallback(){
      const current = getActive(window.location.pathname);
      this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded mb-4 border">
          <div class="container-fluid">
            <a class="navbar-brand fw-semibold" href="index.html">VerdeModa</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVM" aria-controls="navbarVM" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarVM">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link ${current==='index.html' ? 'active' : ''}" ${current==='index.html' ? 'aria-current="page"' : ''} href="index.html">Inicio</a></li>
                <li class="nav-item"><a class="nav-link ${current==='catalogo.html' ? 'active' : ''}" ${current==='catalogo.html' ? 'aria-current="page"' : ''} href="catalogo.html">Catálogo</a></li>
                <li class="nav-item"><a class="nav-link ${current==='contacto.html' ? 'active' : ''}" ${current==='contacto.html' ? 'aria-current="page"' : ''} href="contacto.html">Contacto</a></li>
              </ul>
            </div>
          </div>
        </nav>
      `;
    }
  }

  class VmFooter extends HTMLElement {
    connectedCallback(){
      this.innerHTML = `
        <footer class="footer bg-light text-center py-4 mt-4 rounded border">
          <div class="footer__info">© 2025 VerdeModa</div>
          <div class="footer__redes d-flex gap-3 justify-content-center mt-2">
            <a class="footer__link" href="#">Instagram</a>
            <a class="footer__link" href="#">Facebook</a>
            <a class="footer__link" href="#">WhatsApp</a>
          </div>
        </footer>
      `;
    }
  }

  customElements.define('vm-navbar', VmNavbar);
  customElements.define('vm-footer', VmFooter);
  class VmHero extends HTMLElement {
    connectedCallback(){
      const title = this.getAttribute('title') || 'Moda en Verde';
      const desc = this.getAttribute('desc') || 'Accesorios y prendas tejidos a mano, hechos responsablemente con materiales reciclados en Chile.';
      const ctaText = this.getAttribute('cta-text') || 'Ver catálogo';
      const ctaHref = this.getAttribute('cta-href') || '#catalogo';
      const variant = this.getAttribute('variant') || 'default';
      this.innerHTML = `
        <section class="hero hero--bg-${variant} mb-4">
          <div class="hero__content text-center">
            <h2 class="hero__slogan">${title}</h2>
            <p class="hero__desc">${desc}</p>
            <a class="btn btn-primary" href="${ctaHref}">${ctaText}</a>
          </div>
        </section>
      `;
    }
  }
  customElements.define('vm-hero', VmHero);
})();
