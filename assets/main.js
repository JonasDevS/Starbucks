const menubtn = document.getElementById('menu-btn');

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

menubtn.addEventListener('click', toggleMenu);