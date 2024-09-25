export function smoothScroll() {
  document.querySelectorAll('a.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offset = 250;
        const sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}