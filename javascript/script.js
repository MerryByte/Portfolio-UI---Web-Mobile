let btnTheme = document.getElementsByClassName('theme')[0];
let themeWhiteEmpty = document.getElementsByClassName('theme-btn-white')[0];
let ham = document.getElementsByClassName('nav__hamburger')[0];
let sideBar = document.getElementsByClassName('sidebar')[0];

let darkMode = false;
let sideToggle = false;

ham.addEventListener('click', () => {
    if (sideToggle == false) {
        sideBar.style.width = '0';
        sideToggle = true;
    } else {
        sideBar.style.width = '100px';
        sideToggle = false;
    }
})

btnTheme.addEventListener('click', () => {

    if (darkMode == false) {
        document.documentElement.style.setProperty('--dark-color', '#ffffff');
        document.documentElement.style.setProperty('--primary-white', '#222525');
        document.documentElement.style.setProperty('--secondary-white', '#383b3b');
        document.documentElement.style.setProperty('--shadow-color', '#303131');
        document.documentElement.style.setProperty('--featured-year-color', '#2e446e');
        document.documentElement.style.setProperty('--sidebar-white', '#343436');
        document.documentElement.style.setProperty('--invert-color', 'invert(40%)');

        themeWhiteEmpty.style.display = 'none';
        btnTheme.style.background = 'yellow';
        darkMode = true;
    } else {
        document.documentElement.style.setProperty('--dark-color', '');
        document.documentElement.style.setProperty('--primary-white', '');
        document.documentElement.style.setProperty('--secondary-white', '');
        document.documentElement.style.setProperty('--shadow-color', '');
        document.documentElement.style.setProperty('--featured-year-color', '');
        document.documentElement.style.setProperty('--sidebar-white', '');
        themeWhiteEmpty.style.display = 'block';

        btnTheme.style.background = '';

        darkMode = false;
    }
})