const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar && nav) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}