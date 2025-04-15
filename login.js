function login() {
  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim();

  const loginScreen = document.getElementById('loginScreen');
  const galleryScreen = document.getElementById('galleryScreen');
  const greeting = document.getElementById('greeting');
  const adminControls = document.getElementById('adminControls');

  if (username === '') {
    alert("Please enter your name.");
    return;
  }

  if (username === 'sean' && password === 'jhesean123') {
    greeting.textContent = `Welcome back, Admin Sean!`;
    adminControls.style.display = 'block';
  } else if (password !== '') {
    alert("Incorrect admin credentials.");
    return;
  } else {
    greeting.textContent = `Welcome to Jheann's Area, ${username}!`;
  }

  loginScreen.style.display = 'none';
  galleryScreen.style.display = 'block';
}
