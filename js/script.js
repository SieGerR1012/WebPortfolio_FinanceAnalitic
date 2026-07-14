document.addEventListener('DOMContentLoaded', function () {

    // === Mobile menu ===
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    if (burger && navLinks) {
        burger.addEventListener('click', function () {
            burger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('.navbar__link').forEach(function (link) {
            link.addEventListener('click', function () {
                burger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    // === Navbar shadow on scroll ===
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // === Scroll reveal ===
    var revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    }

    // === Skill bars animation (about page) ===
    var skillBars = document.querySelectorAll('.about__skill');
    if (skillBars.length > 0) {
        var skillObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var fill = entry.target.querySelector('.about__skill-fill');
                    var percent = entry.target.getAttribute('data-skill');
                    if (fill && percent) {
                        setTimeout(function () {
                            fill.style.width = percent + '%';
                        }, 200);
                    }
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        skillBars.forEach(function (bar) {
            skillObserver.observe(bar);
        });
    }

});
