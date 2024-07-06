document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navMenu.classList.toggle('active');
       const image = document.querySelector('.hero-image')
       if (image.style.display === 'none') {
        image.style.display = 'block'; 
      } else {
        image.style.display = 'none'; 
      }
    });
});
document.querySelectorAll('.step h4').forEach(header => {
    header.addEventListener('click', () => {
        const step = header.closest('.step');
        step.classList.toggle('active');
        const content = step.querySelector('p');
        const toggle = header.querySelector('span');
        
        if (step.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
            toggle.textContent = '-';
        } else {
            content.style.maxHeight = 0;
            toggle.textContent = '+';
        }
    });
});
