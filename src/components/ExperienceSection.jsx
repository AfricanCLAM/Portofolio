import CertImg from '../assets/dicoding.png'
import NavBar from './NavBar'
import Footer from './footer'

export default function ExperienceSection() {
    return(
    <>
      <NavBar />
      <div className="experience" id="experience">
          <h2>here are some of my achievement that can serve as a prove of my experience</h2>
          <div className="items">
              <div className="item">
                  <div className="inner">
                      <img src={CertImg} />
                      <a href="https://www.dicoding.com/certificates/2VX3O7GM3ZYQ">Dasar pemrograman web</a>
                      <p>A learning path from Dicoding that introduce the basic programming of a website.</p>
                  </div>
              </div>
              <div className="item">
                  <div className="inner">
                      <img src={CertImg} />
                      <a href="https://www.dicoding.com/certificates/0LZ06O573Z65">Dasar pemrograman javascript</a>
                      <p>learning path from Dicoding that introduce the basic programming of javascript.</p>
                  </div>
              </div>
              <div className="item">
                  <div className="inner">
                      <img src={CertImg} />
                      <a href="https://www.dicoding.com/certificates/NVP7Q14LOZR0">Frond-end web untuk pemula</a>
                      <p>learning path from Dicoding that teach how to built a Front-end of a website for beginners.</p>
                  </div>
              </div>    
          </div>
      </div>
      <Footer />
    </>  
    )
  }