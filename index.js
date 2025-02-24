import logo from "./components/logo.js";
import links from "./components/links.js";
import menu from "./components/menu.js";
import inicio from "./components/inicio.js";
import nosotros from "./components/nosotros.js";
import productos from "./components/productos.js";
import mvp from "./components/mvp.js";
import contacto from "./components/contacto.js";
import equipo from "./components/equipo.js";

const content = {
  logo: logo(),
  links: links(),
  menu: menu(),
  inicio: inicio(),
  nosotros: nosotros(),
  productos: productos(),
  mvp: mvp(),
  contacto: contacto(),
  equipo: equipo()
};
              
// Emulate a mini template engine:
document.addEventListener('DOMContentLoaded', () => {
  let html = document.body.innerHTML;
  Object.entries(content).forEach(([tag, data]) => {
    html = html.replaceAll(`{${tag}}`, data);
  });
  document.body.innerHTML = html;
}); // Esto lo vi en una prueba tecnica por si acaso, simplemente lo modifique como se me ocurrio utilizarlo a mi jaja
