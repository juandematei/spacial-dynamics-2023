class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <nav id="desktop">
          <div class="container">
            <div class="logo">
            <a href="/index.html"><img src="/img/logo-spacial-dynamics.png" alt="Spacial Dynamics Logo" /></a>
            </div>
            <ul class="navbar">
              <li class="navbar-link">
                <a href="/index.html">Inicio</a>
              </li>
              <li class="navbar-link">
                <a href="/pages/sobre-nosotros.html">Sobre nosotros</a>
              </li>
              <li class="navbar-link">
                <a href="javascript:void(0)" class="dropdown-toggle">Sobre la formación<i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown-menu">
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
              <li class="navbar-link">
                <a href="/pages/sinergias.html">Sinergias</a>
              </li>
            </ul>
          </div>
        </nav>
      `;
  }
}

customElements.define("navbar-component", Navbar);
