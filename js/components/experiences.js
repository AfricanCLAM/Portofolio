class Experiences extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
         <section
      class="experience-section centered min-vh-100 py-5"
      id="experiences"
    >
      <div class="container">
        <h2 class="text-center mb-4" style="color: #e22394">Experiences</h2>

        <!-- Carousel with reduced size -->
        <div
          id="experienceCarousel"
          class="carousel slide mx-auto"
          style="max-width: 800px"
        >
          <div class="carousel-indicators">
            <!-- Add indicators for all 5 slides -->
            <button
              type="button"
              data-bs-target="#experienceCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#experienceCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#experienceCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#experienceCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#experienceCarousel"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>

          <div class="carousel-inner rounded-3 shadow">
            <!-- Each carousel item is now a clickable link -->
            <a
              href="https://www.dicoding.com/certificates/2VX3O7GM3ZYQ"
              class="carousel-item active"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/dicoding_cover.jpeg"
                class="d-block w-100"
                alt="Dicoding Banner"
              />
              <div
                class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3"
              >
                <h5>Dasar Pemrograman Web</h5>
                <p>
                  Kelas ini membahas tuntas dasar HTML dan CSS sebagai tiga
                  fondasi pembuatan website.
                </p>
              </div>
            </a>

            <a
              href="https://www.dicoding.com/certificates/0LZ06O573Z65"
              class="carousel-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/dicoding_cover.jpeg"
                class="d-block w-100"
                alt="Dicoding Banner"
              />
              <div
                class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3"
              >
                <h5>Dasar pemrograman JavaScript</h5>
                <p>
                  Kelas ini ditujukan untuk individu yang ingin melangkah
                  menjadi seorang Web Developer/Back-end developer menggunakan
                  teknologi Node.js menggunakan standar kompetensi industri yang
                  divalidasi oleh AWS.
                </p>
              </div>
            </a>

            <a
              href="https://www.dicoding.com/certificates/07Z60YWVWZQR"
              class="carousel-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/dicoding_cover.jpeg"
                class="d-block w-100"
                alt="Dicoding Banner"
              />
              <div
                class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3"
              >
                <h5>Prinsip Pemrograman SOLID</h5>
                <p>
                  Kelas ini ditujukan bagi pemula yang ingin memahami bagaimana
                  menuliskan kode yang baik dengan paradigma OOP
                  (object-priented programming) dengan mengacu pada standar
                  industri.
                </p>
              </div>
            </a>

            <a
              href="https://www.dicoding.com/certificates/NVP7Q14LOZR0"
              class="carousel-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/dicoding_cover.jpeg"
                class="d-block w-100"
                alt="Dicoding Banner"
              />
              <div
                class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3"
              >
                <h5>FRONT-END Web</h5>
                <p>
                  Kelas ini ditujukan untuk seorang Front-End Web Developer yang
                  ingin mengembangkan website yang memiliki fungsionalitas lebih
                  daripada hanya media informasi saja, sesuai dengan standar
                  industri.
                </p>
              </div>
            </a>

            <a
              href="https://www.dicoding.com/certificates/GRX5385DKZ0M"
              class="carousel-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/dicoding_cover.jpeg"
                class="d-block w-100"
                alt="Dicoding Banner"
              />
              <div
                class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3"
              >
                <h5>BACK-END Web</h5>
                <p>
                  Kelas ini ditujukan untuk individu yang ingin melangkah
                  menjadi seorang Back-End Developer dengan standar kompetensi
                  internasional milik AWS.
                </p>
              </div>
            </a>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#experienceCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#experienceCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
        `;
  }
}

customElements.define('experiences-section', Experiences);