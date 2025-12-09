
window.onload = () => {
    window.scrollTo(0, 0);
};


const links = document.querySelectorAll('header nav a');
links.forEach(link => {
    if(link.href === window.location.href) {
        link.style.textDecoration = 'underline';
    }
});
