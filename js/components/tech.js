class Tech extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
         <section
      class="experience-section centered min-vh-100  py-5 mt-5"
      id="skills">
         <div class="container">
        <h2 class="text-center mb-5 font-poppins" style="color: #e22394">
          Technical Skills
        </h2>

        <div class="row g-4">
          <!-- Frontend Skills -->
          <div class="col-md-6 col-lg-4">
            <div class="p-4 rounded-3 h-100" style="background-color: #192121">
              <h4 class="text-white mb-4 font-poppins">Frontend</h4>
              <div class="d-flex flex-wrap gap-4">
                <div class="text-center">
                  <i
                    class="devicon-html5-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">HTML5</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-css3-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">CSS3</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-javascript-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">JavaScript</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-react-original colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">React</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-livewire-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Livewire</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-bootstrap-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Bootstrap</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-tailwindcss-original colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Tailwind</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="col-md-6 col-lg-4">
            <div class="p-4 rounded-3 h-100" style="background-color: #192121">
              <h4 class="text-white mb-4 font-poppins">Backend</h4>
              <div class="d-flex flex-wrap gap-4">
                <div class="text-center">
                  <i
                    class="devicon-nodejs-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Node.js</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-express-original"
                    style="font-size: 2.5rem; color: #fff"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Express</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-php-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">PHP</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-laravel-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Laravel</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-codeigniter-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Code Igniter</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Database Skills -->
          <div class="col-md-6 col-lg-4">
            <div class="p-4 rounded-3 h-100" style="background-color: #192121">
              <h4 class="text-white mb-4 font-poppins">Database</h4>
              <div class="d-flex flex-wrap gap-4">
                <div class="text-center">
                  <i
                    class="devicon-sqlite-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">SQLite</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-postgresql-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">PostgreSQL</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-mysql-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">MySQL</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="col-md-6 col-lg-4">
            <div class="p-4 rounded-3 h-100" style="background-color: #192121">
              <h4 class="text-white mb-4 font-poppins">Tools</h4>
              <div class="d-flex flex-wrap gap-4">
                <div class="text-center">
                  <i
                    class="devicon-git-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Git</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-github-original"
                    style="font-size: 2.5rem; color: #fff"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">GitHub</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-vscode-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">VS Code</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-bash-plain"
                    style="font-size: 2.5rem; color: #fff"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Bash</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-postman-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Postman</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Others -->
          <div class="col-md-6 col-lg-4">
            <div class="p-4 rounded-3 h-100" style="background-color: #192121">
              <h4 class="text-white mb-4 font-poppins">Others</h4>
              <div class="d-flex flex-wrap gap-4">
                <div class="text-center">
                  <i
                    class="devicon-visualbasic-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Visual basic</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-python-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Python</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-java-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white font-dmsans">Java</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      `
  }
}

customElements.define('tech-section', Tech)