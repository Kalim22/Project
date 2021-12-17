const hamburgerMenu = document.querySelector('nav ul li svg').addEventListener('click', () => {
    let smallerMenuList = document.querySelector('.smaller-screen-size-menu');
    smallerMenuList.classList.toggle('smaller-screen-size-menu-active');
});