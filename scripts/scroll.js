const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#nav-top a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    if (window.scrollY < 50) {
        currentSection = 'header';
    }

    navLinks.forEach(link => {
        link.classList.remove('nav-active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('nav-active');
        }
        if(link.getAttribute('href') === '#header' && currentSection === 'header') {
            link.classList.add('nav-active');
        }
    });
});