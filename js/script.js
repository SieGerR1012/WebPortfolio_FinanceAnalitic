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

    // === Service modal ===
    var modalOverlay = document.getElementById('modalOverlay');
    var modalTitle = document.getElementById('modalTitle');
    var modalDesc = document.getElementById('modalDesc');
    var modalFeatures = document.getElementById('modalFeatures');
    var modalIcon = document.getElementById('modalIcon');
    var modalClose = document.getElementById('modalClose');

    function openModal(title, desc, features, icon) {
        if (modalTitle) modalTitle.textContent = title;
        if (modalDesc) modalDesc.textContent = desc;
        if (modalIcon) modalIcon.innerHTML = icon;
        if (modalFeatures) {
            modalFeatures.innerHTML = '';
            features.split(',').forEach(function (f) {
                var li = document.createElement('li');
                li.textContent = f.trim();
                modalFeatures.appendChild(li);
            });
        }
        if (modalOverlay) modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (modalOverlay) modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.service-card').forEach(function (card) {
        card.addEventListener('click', function () {
            var title = card.getAttribute('data-title') || '';
            var desc = card.getAttribute('data-desc') || '';
            var features = card.getAttribute('data-features') || '';
            var icon = card.querySelector('.service-card__icon').innerHTML;
            openModal(title, desc, features, icon);
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // === Contact form ===
    var contactForm = document.getElementById('contactForm');
    var formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var subject = document.getElementById('subject');
            var message = document.getElementById('message');
            var valid = true;

            [name, email, subject, message].forEach(function (field) {
                if (field && !field.value.trim()) {
                    field.style.borderColor = '#e74c3c';
                    valid = false;
                } else if (field) {
                    field.style.borderColor = '';
                }
            });

            if (email && email.value) {
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value)) {
                    email.style.borderColor = '#e74c3c';
                    valid = false;
                }
            }

            if (valid) {
                contactForm.style.display = 'none';
                if (formSuccess) formSuccess.classList.add('show');
            }
        });

        contactForm.querySelectorAll('input, textarea').forEach(function (field) {
            field.addEventListener('input', function () {
                field.style.borderColor = '';
            });
        });
    }

});
