class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <nav id="desktop">
          <div class="container">
            <div class="logo">
            <a href="index.html"><img src="img/logo-spacial-dynamics.png" alt="Spacial Dynamics Logo" /></a>
            </div>
            <ul class="navbar">
              <li class="navbar-link">
                <a href="index.html">Inicio</a>
              </li>
              <li class="navbar-link">
                <a href="sobre-nosotros.html">Sobre nosotros</a>
              </li>
              <li class="navbar-link">
                <a href="javascript:void(0)" class="dropdown-toggle">Sobre la formación<i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="objetivos-del-programa.html">Objetivos del Programa</a>
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
              </li>
              <li class="navbar-link">
                <a href="sinergias.html">Sinergias</a>
              </li>
            </ul>
          </div>
        </nav>
      `;
  }
}

customElements.define("navbar-component", Navbar);
