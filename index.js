// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


// Detecta si es móvil o escritorio y redirige al enlace correcto de WhatsApp
document.addEventListener('DOMContentLoaded', function () {
    const phone = '529612445094';
    const message = encodeURIComponent('¡Hola! Me gustaría ponerme en contacto contigo.');
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    const waUrl = isMobile
        ? `https://wa.me/${phone}?text=${message}`
        : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;
    document.getElementById('whatsapp-link').setAttribute('href', waUrl);
    document.getElementById('whatsapp-link').setAttribute('target', '_blank');
    document.getElementById('whatsapp-link').setAttribute('rel', 'noopener noreferrer');
});


function setDarkMode(enabled) {
    document.body.classList.toggle('dark-mode', enabled);

    const iconElement = document.getElementById('dark-mode-icon');
    iconElement.innerHTML = enabled ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';

    document.getElementById('dark-mode-toggle').checked = enabled;

    document.getElementById('switch-knob').style.transform = enabled ? 'translateX(20px)' : 'translateX(0)';
    document.querySelector('.switch').style.background = enabled ? '#4caf50' : '#ccc';

    localStorage.setItem('darkMode', enabled ? '1' : '0');
}

function getSystemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

document.addEventListener('DOMContentLoaded', function () {
    let darkMode = localStorage.getItem('darkMode');
    if (darkMode === null) {
        darkMode = getSystemPrefersDark() ? '1' : '0';
    }
    setDarkMode(darkMode === '1');

    document.getElementById('dark-mode-toggle').addEventListener('change', function (e) {
        setDarkMode(e.target.checked);
    });

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (localStorage.getItem('darkMode') === null) {
                setDarkMode(e.matches);
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const text = 'Hola, soy <span>Miguel Angel Pérez Díaz</span>';
    const target = document.getElementById('typewriter');
    let i = 0;
    function type() {
        target.innerHTML = text.slice(0, i) + (i % 2 === 0 ? '<span style="border-right:2px solid #333"></span>' : '');
        if (i < text.length) {
            i++;
            setTimeout(type, 60);
        } else {
            target.innerHTML = text; // remove cursor at end
        }
    }
    type();
});

document.addEventListener("DOMContentLoaded", function () {
    const text = ' Ingeniero en Desarrollo y Tecnologías de Software apasionado por crear soluciones innovadoras y eficientes. Especializado en desarrollo web y móvil con enfoque en experiencia de usuario y rendimiento.';
    const target = document.getElementById('typewriter_t');
    let i = 0;
    function type() {
        target.innerHTML = text.slice(0, i) + (i % 2 === 0 ? '<span style="border-right:2px solid #333"></span>' : '');
        if (i < text.length) {
            i++;
            setTimeout(type, 60);
        } else {
            target.innerHTML = text; // remove cursor at end
        }
    }
    type();
});