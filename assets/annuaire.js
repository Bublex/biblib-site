(() => {
  const input = document.getElementById('recherche');
  const count = document.querySelector('[data-result-count]');
  const empty = document.querySelector('[data-no-results]');
  const more = document.querySelector('[data-show-more]');
  const suggestions = document.querySelector('.bb-suggestions');
  const rows = Array.from(document.querySelectorAll('[data-results] li'));
  const pageSize = 10;
  let limit = pageSize;

  function fold(text) {
    return text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
      .replace(/œ/g, 'oe').replace(/æ/g, 'ae').replace(/[^a-z0-9]+/g, ' ')
      .replace(/\bst\b/g, 'saint').replace(/\bste\b/g, 'sainte').trim();
  }

  function render(focusNext = false) {
    const terms = fold(input.value).split(' ').filter(Boolean);
    let matched = 0;
    let nextLink;
    for (const row of rows) {
      const query = ' ' + row.dataset.search;
      if (terms.every((term) => query.includes(' ' + term))) {
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
