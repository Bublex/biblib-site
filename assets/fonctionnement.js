// « Comment ça marche » : le sélecteur iPhone / Chrome change de guide sans recharger la page.
// L'adresse suit le guide affiché (/fonctionnement/iphone/ ou /fonctionnement/chrome/), et le bouton Retour revient au précédent.
(() => {
  const links = [...document.querySelectorAll('.bb-switch [data-appareil]')];
  const panels = [...document.querySelectorAll('[data-panneau]')];
  const titles = { iphone: 'Comment ça marche · Sur iPhone · Biblib', chrome: 'Comment ça marche · Dans Chrome · Biblib' };
  const show = (id) => {
    links.forEach((a) => (a.dataset.appareil === id ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current')));
    panels.forEach((p) => { p.hidden = p.dataset.panneau !== id; });
    document.title = titles[id];
  };
  links.forEach((a) => a.addEventListener('click', (e) => {
    if (e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (a.hasAttribute('aria-current')) return;
    show(a.dataset.appareil);
    history.pushState(null, '', a.href);
  }));
  addEventListener('popstate', () => show(location.pathname.includes('/chrome') ? 'chrome' : 'iphone'));
})();
