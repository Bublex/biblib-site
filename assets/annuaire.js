(() => {
  const input = document.getElementById('recherche');
  const count = document.querySelector('[data-result-count]');
  const empty = document.querySelector('[data-no-results]');
  const more = document.querySelector('[data-show-more]');
  const suggestions = document.querySelector('.bb-suggestions');
  const rows = Array.from(document.querySelectorAll('[data-results] li'));
  const pageSize = 10;
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

  function render(focusNext = false) {
    const terms = fold(input.value).split(' ').filter(Boolean);
    let matched = 0;
    let nextLink;
    for (const row of rows) {
      const text = ' ' + row.dataset.search + ' ';
      if (terms.every((term) => matches(text, term))) {
        matched++;
        row.hidden = matched > limit;
        if (focusNext && matched === limit - pageSize + 1) nextLink = row.querySelector('a');
      } else {
        row.hidden = true;
      }
    }
    const result = matched === 1 ? ' réseau compatible' : ' réseaux compatibles';
    count.textContent = matched ? matched.toLocaleString('fr-FR') + result : '';
    empty.hidden = matched !== 0;
    more.hidden = matched <= limit;
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
