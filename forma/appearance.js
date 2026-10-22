(() => {
  'use strict';
  const key = 'forma.website.appearance';
  const choices = ['light', 'dark', 'auto'];
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const valid = value => choices.includes(value) ? value : 'auto';
  let appearance = 'auto';
  try { appearance = valid(localStorage.getItem(key)); } catch (_) { /* Use the device default when storage is unavailable. */ }

  function render() {
    document.documentElement.dataset.theme = appearance === 'auto' ? (system.matches ? 'dark' : 'light') : appearance;
    document.querySelectorAll('input[name="appearance"]').forEach(input => {
      input.checked = input.value === appearance;
    });
  }
  render();

  document.addEventListener('DOMContentLoaded', () => {
    const control = document.querySelector('.appearance');
    if (!control) return;
    control.addEventListener('change', event => {
      if (!event.target.matches('input[name="appearance"]')) return;
      appearance = valid(event.target.value);
      try { localStorage.setItem(key, appearance); } catch (_) { /* The choice still applies for this page. */ }
      render();
    });
    render();
    control.hidden = false;
  });
  system.addEventListener('change', () => { if (appearance === 'auto') render(); });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      appearance = valid(event.newValue);
      render();
    }
  });
})();
