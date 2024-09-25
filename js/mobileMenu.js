export function mobileMenu() {
  const mobileMenuButton = document.querySelector(".navbar-mobile");
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("d-none");
  });
}