document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.header-menu');
    menu.classList.toggle('open');
    menu.classList.toggle('closed');
});