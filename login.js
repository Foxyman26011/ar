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

function addImage() {
  const imageInput = document.getElementById('imageInput');
  const caption = document.getElementById('imageCaption').value;
  const gallery = document.getElementById('gallery');

  const file = imageInput.files[0];
  if (!file) {
    alert("Please select an image.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const imgBox = document.createElement('div');
    imgBox.classList.add('image-box');

    const img = document.createElement('img');
    img.src = e.target.result;

    const captionEl = document.createElement('p');
    captionEl.textContent = caption;

    imgBox.appendChild(img);
    imgBox.appendChild(captionEl);
    gallery.prepend(imgBox);
  };

  reader.readAsDataURL(file);
  imageInput.value = '';
  document.getElementById('imageCaption').value = '';
}
