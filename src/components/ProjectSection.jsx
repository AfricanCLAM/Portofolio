import { FaLongArrowAltRight, FaShoppingCart, FaUser ,FaCoffee} from "react-icons/fa";
import Footer from "./footer";
import NavBar from "./NavBar";

export default function ProjectSection() {
    return(
      <>
      <NavBar />
      <div className="projects" id="project">
          <div className="inner">
              <h2>Projects Showcase</h2>
              <p className="info">Take a look at some of my notable projects, showcasing my ability to design and develop
                  effective web solutions.</p>
              <button>Explore my projects <FaLongArrowAltRight /></button>
  
              <div className="items">
                  <div className="item">
                      <FaShoppingCart />
                      <a href="#">E-Commerce</a>
                      <p>a joint project with my friend,i Developed the backend section of the E-commerce platform.</p>
                  </div>
                  <div className="item">
                      <FaUser />
                      <a href="#">Portfolio Website</a>
                      <p>Designed and built a personal portfolio website to showcase my projects and skills.</p>
                  </div>
                  
                  <div className="item">
                  <FaCoffee />
                      <a href="#">Coffe shop</a>
                      <p>A Coffe shop website</p>
                  </div>
              </div>
          </div>
      </div>
      <Footer />
      </>
    )
  }