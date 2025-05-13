class Hero extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
                <section
      class="d-flex centered min-vh-100 py-4 py-md-5"
   id="hero"
    >
     <div class="container">
    <div class="px-3 px-sm-4 px-md-5 py-3 py-md-5 text-center mx-auto glass">
        <img
          class="d-block mx-auto mb-4"
          src="./img/logo.png"
          alt="Profile Logo"
              width="140"
              height="140"
              style="filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));"
        />
        <h1 class="display-4 display-md-5 fw-bold text-body-emphasis font-poppins gradient">AfricanCLAM</h1>
        <div class="col-lg-6 mx-auto">
          <p class="mb-4 font-dmsans outer-space-color bold" >
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
            <i class="bi bi-envelope-fill pb-2" style="font-size: 30px"></i> 
            <p style="font-size: 30px">
                rafir0532@gmail.com
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
      `
  }
}

customElements.define('hero-section', Hero)