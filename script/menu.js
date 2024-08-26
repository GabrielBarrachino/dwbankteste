// Menu Mobile
const abrirMenu = document.getElementById('openMenu');
const fecharMenu = document.getElementById('closeMenu');
const overlay = document.querySelector('.menuMobile .overlay');

function openMenu() {
    document.documentElement.classList.add('menuOpened');
}

function closeMenu() {
    document.documentElement.classList.remove('menuOpened');
}

abrirMenu.addEventListener('click', openMenu);
fecharMenu.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);