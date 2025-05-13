class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="container-full sticky-top gosamer-color" id="header">
      <header
        class="d-flex flex-wrap justify-content-center py-3 px-3 mb-4 border-bottom"
>
        <a
          href="#hero"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span class="fs-4 outer-space-color">AfricanCLAM</span>
        </a>
        <nav id="navbar">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="#hero" class="nav-link outer-space-color">About</a>
          </li>
          <li class="nav-item">
            <a href="#experiences" class="nav-link outer-space-color">Experiences</a>
          </li>
          <li class="nav-item">
            <a href="#projects" class="nav-link outer-space-color">Projects</a>
          </li>
          <li class="nav-item">
            <a href="#skills" class="nav-link outer-space-color">Technical Skills</a>
          </li>
        </ul>
        </nav>
      </header>
    </div>
    `;
  }
}

customElements.define('header-component', Header);