class Hero extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
  <div class="px-4 py-5 my-5 text-center min-vh-100 centered" id="hero">
        <img
          class="d-block mx-auto mb-4"
          src="./img/logo.png"
          alt=""
          width="170"
          height="170"
        />
        <h1 class="display-5 fw-bold text-body-emphasis">AfricanCLAM</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Hello! i&apos;m Rafi salman al-farizi, a Student in SMK ANTARTIKA 2
            vocational highschool. My journey into the world of coding began at
            14 years old during my time at junior highschool, and I have been
            passionate about it ever since.
          </p>
          <div
            class="d-flex flex-row justify-content-center align-items-center gap-3"
          >
            <a href="https://github.com/AfricanCLAM" class="pb-2">
              <i class="bi bi-github" style="font-size: 30px"></i>
            </a>
            <p style="font-size: 30px">|</p>
            <p style="font-size: 30px">
              <i class="bi bi-envelope-fill"></i> rafir0532@gmail.com
            </p>
          </div>
        </div>
      </div>
      `
    }
}

customElements.define('hero-section', Hero)