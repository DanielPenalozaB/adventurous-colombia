import { mobileMenu } from './mobileMenu.js';
import { smoothScroll } from './smoothScroll.js';

// Ejecuta todas las funciones necesarias al cargar el sitio
document.addEventListener('DOMContentLoaded', () => {
  smoothScroll(); // Activa el scroll suave
  mobileMenu(); // Activa el menu mobile
});