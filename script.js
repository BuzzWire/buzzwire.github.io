document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;
  alert('Email: ' + email + '\nContraseña: ' + password);
});
