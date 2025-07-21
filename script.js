const toggle = document.getElementById('toggle-theme');
const body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('light');
});
