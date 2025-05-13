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
        <h2 class="text-center mb-5" style="color: #e22394">
          Technical Skills
        </h2>

        <div class="row g-4">
          <!-- Frontend Skills -->
          <div class="col-md-6 col-lg-4">
            <div class="p-4 rounded-3 h-100" style="background-color: #192121">
              <h4 class="text-white mb-4">Frontend</h4>
              <div class="d-flex flex-wrap gap-4">
                <div class="text-center">
                  <i
                    class="devicon-html5-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">HTML5</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-css3-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">CSS3</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-javascript-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">JavaScript</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-react-original colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">React</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-livewire-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">Livewire</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-bootstrap-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">Bootstrap</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-tailwindcss-original colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">Tailwind</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="col-md-6 col-lg-4">
            <div class="p-4 rounded-3 h-100" style="background-color: #192121">
              <h4 class="text-white mb-4">Backend</h4>
              <div class="d-flex flex-wrap gap-4">
                <div class="text-center">
                  <i
                    class="devicon-nodejs-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">Node.js</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-express-original"
                    style="font-size: 2.5rem; color: #fff"
                  ></i>
                  <p class="mt-2 text-white">Express</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-php-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">PHP</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-laravel-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">Laravel</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-codeigniter-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">Code Igniter</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Database Skills -->
          <div class="col-md-6 col-lg-4">
            <div class="p-4 rounded-3 h-100" style="background-color: #192121">
              <h4 class="text-white mb-4">Database</h4>
              <div class="d-flex flex-wrap gap-4">
                <div class="text-center">
                  <i
                    class="devicon-sqlite-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">SQLite</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-postgresql-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">PostgreSQL</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-mysql-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">MySQL</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="col-md-6 col-lg-4">
            <div class="p-4 rounded-3 h-100" style="background-color: #192121">
              <h4 class="text-white mb-4">Tools</h4>
              <div class="d-flex flex-wrap gap-4">
                <div class="text-center">
                  <i
                    class="devicon-git-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">Git</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-github-original"
                    style="font-size: 2.5rem; color: #fff"
                  ></i>
                  <p class="mt-2 text-white">GitHub</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-vscode-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">VS Code</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-bash-plain"
                    style="font-size: 2.5rem; color: #fff"
                  ></i>
                  <p class="mt-2 text-white">Bash</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-postman-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">Postman</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Others -->
          <div class="col-md-6 col-lg-4">
            <div class="p-4 rounded-3 h-100" style="background-color: #192121">
              <h4 class="text-white mb-4">Others</h4>
              <div class="d-flex flex-wrap gap-4">
                <div class="text-center">
                  <i
                    class="devicon-visualbasic-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">Visual basic</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-python-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">Python</p>
                </div>
                <div class="text-center">
                  <i
                    class="devicon-java-plain colored"
                    style="font-size: 2.5rem"
                  ></i>
                  <p class="mt-2 text-white">Java</p>
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