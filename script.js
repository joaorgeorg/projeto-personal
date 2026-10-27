// Efeito Blur na Navbar ao fazer Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle do Menu Mobile
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-item');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Muda o ícone (Hamburger / Fechar)
    const icon = mobileBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fechar menu mobile ao clicar num link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            mobileBtn.querySelector('i').classList.remove('fa-times');
            mobileBtn.querySelector('i').classList.add('fa-bars');
        }
    });
});

// Envia os dados do formulário de contato para o WhatsApp
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const objectiveSelect = document.getElementById('objetivo');
    const objective = objectiveSelect.value
        ? objectiveSelect.options[objectiveSelect.selectedIndex].text
        : 'N\u00e3o informado';
    const message = document.getElementById('mensagem').value.trim() || 'N\u00e3o informada';

    const whatsappMessage = [
        'Ol\u00e1! Gostaria de solicitar mais informa\u00e7\u00f5es sobre seus servi\u00e7os de personal trainer.',
        '',
        `*Nome:* ${name}`,
        `*E-mail:* ${email}`,
        `*Objetivo principal:* ${objective}`,
        `*Mensagem:* ${message}`
    ].join('\n');

    const whatsappUrl = `https://wa.me/5553984010438?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
