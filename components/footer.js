class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="footer-content">
        <div class="footer-navigation">
            <h4>Nosotros</h4>
            <ul>
              <li>
                <a href="sobre-nosotros.html#alejandro-dambrosi">Alejandro Dambrosi</a>
              </li>
              <li>
                <a href="sobre-nosotros.html#katie-moran">Katie Moran</a>
              </li>
              <li>
                <a href="sobre-nosotros.html#luciana-dalesson">Luciana Dalesson</a>
              </li>
            </ul>
          </div>
          <div class="footer-navigation">
            <h4>Formación</h4>
            <ul>
              <li>
                <a href="objetivos-del-programa.html">Objetivos del programa</a>
              </li>
              <li>
                <a href="ambitos-de-aplicacion.html">Ámbitos de aplicación</a>
              </li>
              <li>
                <a href="metodos-pedagogicos.html">Métodos pedagógicos</a>
              </li>
              <li>
                <a href="niveles-de-formacion.html">Niveles de formación</a>
              </li>
              <li>
                <a href="lineamientos-pedagogicos.html">Lineamietos pedagógicos</a>
              </li>
            </ul>
          </div>
          <div class="footer-navigation">
            <h4>Sinergias</h4>
            <ul>
              <li><a href="">Despertar del Hemisferio Sur</a></li>
              <li><a href="">Los Mangrullos</a></li>
              <li><a href="">LOPSA</a></li>
              <li><a href="">AMAA</a></li>
              <li><a href="">El Faro</a></li>
              <li><a href="">Taller Despertares</a></li>
            </ul>
          </div>
          <div class="footer-social">
          <h4>Contacto</h4>
          <p><i class="fas fa-envelope"></i><a href="mailto:info@spacialdynamicslatinoamerica.com">info@spacialdynamicslatinoamerica.com</a></p>
          <p><i class="fab fa-facebook-f"></i><a href="https://www.facebook.com/SpacialDynamicsLatinoamerica/">SpacialDynamicsLatinoamerica</a>
          <p class="copyright">© 2022 Spacial Dynamics Latinoamérica</p>    
          </div>
        </div>
        <div class="footer-author">
          <a class="logo" href="https://www.juandematei.com"></a>
          <p>Diseñado y desarrollado por <a href="https://www.juandematei.com">Juan Dematei</a></p>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
