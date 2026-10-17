
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
document.querySelectorAll('.photo-input').forEach(input => {
  input.addEventListener('change', () => {
    const file = input.files && input.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { alert('Please choose an image file.'); return; }
    const img = document.getElementById(input.dataset.target);
    if (img) img.src = URL.createObjectURL(file);
  });
});
