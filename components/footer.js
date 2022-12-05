class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-links">
          <a href="mailto:info@spacialdynamicslatinoamerica.com"><i class="fas fa-envelope"></i></a>
          <a href="https://www.facebook.com/SpacialDynamicsLatinoamerica/"><i class="fab fa-facebook-f"></i></a>
        </div>
        <div class="author">
          <p>Diseño y desarrollo web</p>
          <a class="author-logo" href="https://www.juandematei.com"></a>
        </div>
      </div>
    </div>
  </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
