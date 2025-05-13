class Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
          <div class="container-full gosamer-color" id="footer">
        <footer
          class="d-flex flex-wrap justify-content-between align-items-center py-3 px-5 border-top"
        >
          <div class="col-md-4 d-flex align-items-center pt-3">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              aria-label="Bootstrap"
            >
              <img
                src="./img/logo.png"
                alt="AfricanCLAM"
                height="30px"
                width="30px"
              />
            </a>
            <p class="mb-3 mb-md-0 outer-space-color font-spacemono"
              >Made By <span class="gradient font-poppins">AfricanCLAM</span> </p
            >
          </div>
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a
                class="text-body-secondary"
                href="https://github.com/AfricanCLAM"
                aria-label="Github"
              >
                <i
                  class="bi bi-github outer-space-color"
                  style="font-size: 30px"
                ></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>`
    }
}

customElements.define('footer-section', Footer)