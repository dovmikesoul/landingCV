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
    const phone = '529671358399';
    const message = encodeURIComponent('¡Hola! Me gustaría ponerme en contacto contigo.');
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    const waUrl = isMobile
        ? `https://wa.me/${phone}?text=${message}`
        : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;
    document.getElementById('whatsapp-link').setAttribute('href', waUrl);
    document.getElementById('whatsapp-link').setAttribute('target', '_blank');
    document.getElementById('whatsapp-link').setAttribute('rel', 'noopener noreferrer');
});



function setDarkMode(isDark) {
   
    const body = document.body;
    const checkbox = document.getElementById('dark-mode-toggle');
    const knob = document.getElementById('switch-knob');
    const switchBg = knob.parentElement; // El contenedor del switch
    const icon = document.getElementById('dark-mode-icon');

    if (isDark) {
        body.classList.add('dark-mode');
        checkbox.checked = true;
        localStorage.setItem('darkMode', 'enabled');

        // Estilos visuales del Switch (Modo Oscuro)
        knob.style.transform = 'translateX(20px)';
        switchBg.style.background = '#3b82f6'; // Color primario azul
        icon.textContent = '🌙';
    } else {
        body.classList.remove('dark-mode');
        checkbox.checked = false;
        localStorage.setItem('darkMode', 'disabled');

        // Estilos visuales del Switch (Modo Claro)
        knob.style.transform = 'translateX(0px)';
        switchBg.style.background = '#ccc';
        icon.textContent = '☀️';
    }
}

// Evento de carga inicial
document.addEventListener('DOMContentLoaded', function () {
     localStorage.clear();
    const userPreference = localStorage.getItem('darkMode');
    const systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Estado inicial
    if (userPreference === 'enabled') {
        setDarkMode(true);
    } else if (userPreference === 'disabled') {
        setDarkMode(false);
    } else {
        setDarkMode(systemMediaQuery.matches);
    }

    // Escuchar el click en el toggle
    document.getElementById('dark-mode-toggle').addEventListener('change', function (e) {
        setDarkMode(e.target.checked);
    });

    // Escuchar cambios del sistema
    systemMediaQuery.addEventListener('change', e => {
        if (!localStorage.getItem('darkMode')) {
            setDarkMode(e.matches);
        }
    });
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