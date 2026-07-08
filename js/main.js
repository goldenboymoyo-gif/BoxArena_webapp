document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.nav-link');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const current = window.scrollY;
        if (current > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = current;

        let currentSection = '';
        document.querySelectorAll('section[id]').forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                currentSection = section.getAttribute('id');
            }
        });
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});
