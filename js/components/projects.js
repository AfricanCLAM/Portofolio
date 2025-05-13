class Projects extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
<div class="container px-4 mx-auto min-vh-100 centered" id="projects">
        <h2 class="text-center mb-5 fw-bold font-poppins" style="color: #e22394">
          Projects
        </h2>

        <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          <!-- Coffee Shop Card -->
          <div class="col">
            <div
              class="card h-100 border-0 shadow-sm"
              style="background-color: #192121"
            >
              <div class="card-body text-white">
                <h5 class="card-title d-flex align-items-center gap-2 font-poppins">
                  <i class="bi bi-cup-hot" style="color: #e22394"></i>
                  Coffee Shop
                </h5>
                <p class="card-text text-light font-dmsans">
                  A responsive coffee shop website with menu and ordering
                  system. my very first micro-project from WPU Tutorial
                </p>
                <div class="mt-auto">
                  <span
                    class="badge rounded-pill font-spacemono p-2"
                    style="background-color: #09a874"
                    >HTML/CSS</span
                  >
                  <span
                    class="badge rounded-pill font-spacemono p-2 ms-2"
                    style="background-color: #804898"
                    >JS</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- E-commerce Card -->
          <div class="col">
            <div
              class="card h-100 border-0 shadow-sm"
              style="background-color: #192121"
            >
              <div class="card-body text-white">
                <h5 class="card-title d-flex align-items-center gap-2 font-poppins">
                  <i class="bi bi-shop" style="color: #e22394"></i>
                  E-commerce
                </h5>
                <p class="card-text text-light font-dmsans">
                 A joint project with my friend in which i developed the backend of the application.
                </p>
                <div class="mt-auto">
                  <span
                    class="badge rounded-pill font-spacemono p-2"
                    style="background-color: #09a874"
                    >HTML/CSS</span
                  >
                  <span
                    class="badge rounded-pill font-spacemono p-2 ms-2"
                    style="background-color: #804898"
                    >Node.js</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Note-taking App Card -->
          <div class="col">
            <div
              class="card h-100 border-0 shadow-sm"
              style="background-color: #192121"
            >
              <div class="card-body text-white">
                <h5 class="card-title d-flex align-items-center gap-2 font-poppins">
                  <i class="bi bi-card-checklist" style="color: #e22394"></i>
                  Note-taking App
                </h5>
                <p class="card-text text-light font-dmsans">
                  Task management application with markdown support and Additional ToDo list capabilities (In Development).
                </p>
                <div class="mt-auto">
                  <span
                    class="badge rounded-pill font-spacemono p-2"
                    style="background-color: #09a874"
                    >React</span
                  >
                  <span
                    class="badge rounded-pill font-spacemono p-2 ms-2"
                    style="background-color: #804898"
                    >Laravel</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`
  }
}

customElements.define('projects-section', Projects)