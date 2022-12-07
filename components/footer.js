class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-navigation">
            <h4>Mapa del sitio</h4>
            <ul>
              <li>
                <a href="/index.html">Inicio</a>
              </li>
              <li>
                <a href="/pages/sobre-nosotros.html">Sobre nosotros</a>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="/pages/sobre-la-formacion/objetivos-del-programa.html">Objetivos del Programa</a>
                  </li>
                  <li>
                    <a href="/pages/sobre-la-formacion/ambitos-de-aplicacion.html">Ámbitos de aplicación</a>
                  </li>
                  <li>
                    <a href="/pages/sobre-la-formacion/metodos-pedagogicos.html">Métodos pedagógicos</a>
                  </li>
                  <li>
                    <a href="/pages/sobre-la-formacion/niveles-de-formacion.html">Niveles de formación</a>
                  </li>
                  <li>
                    <a href="/pages/sobre-la-formacion/lineamientos-pedagogicos.html">Lineamietos pedagógicos</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/pages/sinergias.html">Sinergias</a>
              </li>
            </ul>
          </div>
          <div class="footer-social">
            <h4>Contacto y redes</h4>
            <a href="mailto:info@spacialdynamicslatinoamerica.com"><i class="fas fa-envelope"></i></a>
            <a href="https://www.facebook.com/SpacialDynamicsLatinoamerica/"><i class="fab fa-facebook-f"></i></a>
          </div>
          <div class="footer-author">
            <h4>Diseño y desarrollo</h4>
            <a class="author-logo" href="https://www.juandematei.com"></a>
            <p>Juan Dematei</p>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
