// Header shadow on scroll + back to top
(function(){
  const header = document.querySelector('.header');
  const btnTop = document.querySelector('.back-to-top');
  const toggle = document.querySelector('.header__toggle');
    const nav = document.querySelector('.header__nav');
  function onScroll(){
    const y = window.scrollY || document.documentElement.scrollTop;
      if (header) {
        if (y > 10) header.classList.add('is-scrolled'); else header.classList.remove('is-scrolled');
      }
      if (btnTop) btnTop.classList.toggle('is-visible', y > 300);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
    if (btnTop) {
      btnTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
    // Marcar nav-link activo según la URL actual (Bootstrap navbar)
    const markActiveNav = () => {
      const links = document.querySelectorAll('.navbar .nav-link');
      if (!links.length) return;
      const path = window.location.pathname.split('/').pop() || 'index.html';
      const normalized = path.split('#')[0].split('?')[0];
      links.forEach(link => {
        const href = (link.getAttribute('href') || '').split('/').pop();
        const hrefNorm = href.split('#')[0].split('?')[0];
        const isActive = hrefNorm === normalized || (normalized === '' && hrefNorm === 'index.html');
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    };
    markActiveNav();
  onScroll();
})();
