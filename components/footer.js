class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <img class="footer-logo" src="img/logo-spacial-dynamics.png" alt="Spacial Dynamics Logo" />
      <div class="footer-content">
        <div class="footer-links">
          <h3 class="m-0">Conectá con nosotros</h3>
          <p>Enviá un correo a <a href="mailto:info@spacialdynamicslatinoamerica.com">info@spacialdynamicslatinoamerica.com</a> o completá el formulario de contacto para mandarnos un mensaje. También podés seguirnos en nuestras redes sociales.</p>
          <ul class="social-links my-s">
            <li>
              <a href="https://www.facebook.com/SpacialDynamicsLatinoamerica/"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/spacialdynamicslatinoamerica"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="mailto:info@spacialdynamicslatinoamerica.com"><i class="fas fa-envelope"></i></a>
            </li>
          </ul>

          <!--Sitemap-->
          <ul class="sitemap-links">
            <li class="links-group">
              <h4>Nosotros</h4>
              <ul>
                <li><a href="sobre-nosotros.html#alejandro-dambrosi">Alejandro Dambrosi</a></li>
                <li><a href="sobre-nosotros.html#katie-moran">Katie Moran</a></li>
                <li><a href="sobre-nosotros.html#luciana-dalesson">Luciana Dalesson</a></li>
              </ul>
            </li>
            <li class="links-group">
              <h4>Formación</h4>
              <ul>
                <li><a href="objetivos-del-programa.html">Objetivos del programa</a></li>
                <li><a href="ambitos-de-aplicacion.html">Ámbitos de aplicación</a></li>
                <li><a href="metodos-pedagogicos.html">Métodos pedagógicos</a></li>
                <li><a href="niveles-de-formacion.html">Niveles de formación</a></li>
                <li><a href="lineamientos-pedagogicos.html">Lineamietos pedagógicos</a></li>
              </ul>
            </li>
            <li class="links-group">
              <h4>Sinergias</h4>
              <ul>
                <li><a href="sinergias.html">Despertar del Hemisferio Sur</a></li>
                <li><a href="sinergias.html">Los Mangrullos</a></li>
                <li><a href="sinergias.html">LOPSA</a></li>
                <li><a href="sinergias.html">AMAA</a></li>
                <li><a href="sinergias.html">El Faro</a></li>
                <li><a href="sinergias.html">Taller Despertares</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="footer-contact">
          <h3 class="m-0">Contacto</h3>
          <div class="contact-form">
            <form action="https://formspree.io/f/xeqwawen" method="POST">
              <label for="name">Nombre</label>
              <input type="text" id="name" name="name" placeholder="Ingresá tu nombre" required />
              <label for="email">Correo electrónico</label>
              <input type="email" id="email" name="email" placeholder="Ingresá tu correo electrónico" required />
              <label for="message">Mensaje</label>
              <textarea id="message" name="message" rows="5" placeholder="Escribí tu mensaje..." required></textarea>
              <button type="submit">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
      <div class="footer-author">
        <a class="logo" href="https://www.juandematei.com"></a>
        <p>Diseñado y desarrollado por <a href="https://www.juandematei.com">Juan Dematei</a></p>
        <p class="copyright">©2023 Spacial Dynamics Latinoamérica</p>
      </div>
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
