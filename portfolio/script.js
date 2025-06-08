// script.js

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        document.documentElement.classList.remove('dark');
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }

    darkModeToggle.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
        }
    });
    const skillBars = document.querySelectorAll('.skill-bar');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                bar.style.width = bar.dataset.width;
            } else {
                bar.style.width = '0%';
            }
        });
    };

    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('resize', animateSkillBars);
    animateSkillBars();
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    const nameElement = document.querySelector('#home h1');
    const originalNameText = "Hi, I'm MD RABIUL HOSSEN!";
    nameElement.textContent = "";

    let nameCharIndex = 0;
    const nameTypingSpeed = 80;

    function typeName() {
        if (nameCharIndex < originalNameText.length) {
            nameElement.textContent += originalNameText.charAt(nameCharIndex);
            nameCharIndex++;
            setTimeout(typeName, nameTypingSpeed);
        } else {
           typeWriter();
        }
    }
    typeName();
});
