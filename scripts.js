document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const revealSection = (entries, observer) => {
        // biome-ignore lint/complexity/noForEach: <explanation>
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.1,
    });
// biome-ignore lint/complexity/noForEach: <explanation>
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const navLinks = document.querySelectorAll('nav ul li a');
// biome-ignore lint/complexity/noForEach: <explanation>
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
    const darkModeToggle = document.getElementById("dark-mode-toggle")
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        // biome-ignore lint/complexity/noForEach: <explanation>
        navLinks.forEach(link => {
            link.classList.toggle('dark-mode');
        });
    });
});
