// Annuaire : filtre les réseaux et leurs bibliothèques dans la page, sans requête.
// Un réseau s'affiche quand son nom correspond à la recherche (avec toutes ses bibliothèques), ou quand une de ses
// bibliothèques correspond par son nom, sa commune, son code postal ou le nom d'un de ses réseaux
// (« Bordeaux » trouve aussi les bibliothèques de Mérignac, qui sont dans Bordeaux Métropole).
(() => {
  const input = document.getElementById('recherche');
  const count = document.querySelector('[data-result-count]');
  const empty = document.querySelector('[data-no-results]');
  const more = document.querySelector('[data-show-more]');
  const suggestions = document.querySelector('.bb-suggestions');
  const list = document.querySelector('[data-results]');
  const pageSize = 10;
  // Sans recherche, ou pour un réseau trouvé de loin, la liste des bibliothèques est d'abord réduite.
  const shortList = 6;
  let limit = pageSize;

  // Les textes de la liste écrivent déjà « saint » et « sainte » en entier.
  const abbreviations = { st: 'saint', ste: 'sainte' };

  function fold(text) {
    return text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
      .replace(/œ/g, 'oe').replace(/æ/g, 'ae').replace(/[^a-z0-9]+/g, ' ').trim();
  }

  // « st » est le début d'un mot (Strasbourg) ou l'abréviation d'un mot entier (St-Médard = Saint-Médard).
  function matches(text, term) {
    const full = abbreviations[term];
    return text.includes(' ' + term) || (full !== undefined && text.includes(' ' + full + ' '));
  }
  const matchesAll = (search, terms) => terms.every((term) => matches(' ' + search + ' ', term));

  const plural = (n, one, many) => n.toLocaleString('fr-FR') + ' ' + (n === 1 ? one : many);

  const networks = Array.from(list.children).map((row, index) => {
    const branches = Array.from(row.querySelectorAll('.bb-branches > li'));
    let toggle = null;
    if (branches.length > shortList) {
      toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'bb-branches-toggle';
      toggle.hidden = true;
      row.append(toggle);
    }
    const network = { row, index, branches, toggle, title: fold(row.dataset.titre), open: false, shown: [] };
    if (toggle) toggle.addEventListener('click', () => { network.open = !network.open; showBranches(network); });
    return network;
  });

  function showBranches(network) {
    const { branches, shown, toggle, open } = network;
    const visible = open ? shown.length : Math.min(shown.length, shortList);
    for (const branch of branches) branch.hidden = true;
    shown.slice(0, visible).forEach((branch) => { branch.hidden = false; });
    if (!toggle) return;
    const rest = shown.length - shortList;
    toggle.hidden = rest <= 0;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Réduire la liste' : 'Voir ' + (rest === 1 ? 'l’autre bibliothèque' : 'les ' + rest + ' autres bibliothèques');
  }

  function render(focusNext = false) {
    const terms = fold(input.value).split(' ').filter(Boolean);
    const query = terms.join(' ');
    const found = [];
    let branchCount = 0;
    for (const network of networks) {
      const whole = matchesAll(network.row.dataset.search, terms);
      network.shown = whole ? network.branches : network.branches.filter((b) => matchesAll(b.dataset.search, terms));
      if (!whole && !network.shown.length) continue;
      // Classement : le réseau qui porte le nom cherché, puis celui dont une bibliothèque est dans la commune cherchée.
      network.rank = !query ? 0
        : network.title === query ? 0
          : network.shown.some((b) => b.dataset.ville === query) ? 1
            : network.title.startsWith(query) ? 2 : 3;
      branchCount += network.shown.length || 1;
      found.push(network);
    }
    found.sort((a, b) => a.rank - b.rank || a.index - b.index);
    const visible = new Set(found.slice(0, limit));
    let nextLink;
    for (const network of networks) network.row.hidden = !visible.has(network);
    found.forEach((network, i) => {
      list.append(network.row);
      if (!visible.has(network)) return;
      // Le réseau cherché, ou celui de la commune cherchée, montre d'emblée toutes ses bibliothèques.
      network.open = query !== '' && network.rank <= 2;
      showBranches(network);
      if (focusNext && i === limit - pageSize) nextLink = network.row.querySelector('a');
    });
    count.textContent = found.length
      ? plural(branchCount, 'bibliothèque', 'bibliothèques') + ' dans ' + plural(found.length, 'réseau', 'réseaux')
      : '';
    empty.hidden = found.length !== 0;
    more.hidden = found.length <= limit;
    if (nextLink) nextLink.focus();
  }

  function search() {
    limit = pageSize;
    render();
  }

  const address = new URL(window.location.href);
  input.value = address.searchParams.get('ville') || '';
  input.closest('[role="search"]').hidden = false;
  suggestions.hidden = false;
  // Le champ était masqué au chargement : le navigateur n'a pas pu descendre jusqu'à lui.
  if (address.hash === '#recherche') input.closest('[role="search"]').scrollIntoView({ block: 'start' });
  input.addEventListener('input', search);
  suggestions.addEventListener('click', (event) => {
    const choice = event.target.closest('[data-city]');
    if (!choice) return;
    input.value = choice.dataset.city;
    search();
    input.focus();
  });
  more.addEventListener('click', () => {
    limit += pageSize;
    render(true);
  });
  render();
})();
