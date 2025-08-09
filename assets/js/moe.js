// Smooth scroll function
export function smoothScroll() {
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      const targetHash = this.hash;

      if (targetHash !== "") {
        event.preventDefault();
        
        const targetElement = document.querySelector(targetHash);
        
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        window.location.hash = targetHash;  // Update URL hash
      }
    });
  });
}

// Navbar toggle function
export function toggleNavbar() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinksList = document.querySelector('ul.nav');

  if (navToggle && navLinksList) {
    navToggle.addEventListener('click', function () {
      this.classList.toggle('is-active');
      navLinksList.classList.toggle('show');
    });
  }
}

// Scroll detection function to change navbar styles
export function changeNavbarOnScroll() {
  const navbar = document.querySelector('.navbar');
  const homeSection = document.querySelector('#home');

  if (!navbar || !homeSection) return;

  window.addEventListener('scroll', function () {
    const homePosition = homeSection.offsetTop + homeSection.offsetHeight;

    if (window.scrollY > homePosition) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}
