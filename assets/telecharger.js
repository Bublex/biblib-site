// Sur ordinateur, un lien vers l'App Store ouvre une fenêtre avec un QR code : on le scanne avec son iPhone.
// Sur téléphone ou tablette (écran tactile), le lien mène directement à l'App Store.
(() => {
  const dialog = document.getElementById('biblib-app-store');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const desktop = matchMedia('(hover: hover) and (pointer: fine)');
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="https://apps.apple.com/"]');
    if (!link || dialog.contains(link) || !desktop.matches) return;
    if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    dialog.showModal();
  });
  // Un clic hors de la fenêtre, sur le fond assombri, la ferme.
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
})();
