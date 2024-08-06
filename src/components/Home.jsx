import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Hero from "../assets/hero.jpg";
import Footer from "./footer";
import NavBar from './NavBar'

function Header() {
  return (
    <div className="hero" id="home">
      <div className="left-section">
        <div className="top">
          <h2>About me</h2>
          <p>
            Hello! i&apos;m Rafi salman al-farizi, a Student in SMK ANTARTIKA 2 vocational highschool.
            My journey into the world of coding began at 14 years old during my time at junior highschool,
            and I have been passionate about it ever since.
          </p>

          <div className="buttons">
            <button className="git"><i className="ri-github-fill"></i><a href="https://github.com/AfricanCLAM">My github</a></button>
          </div>
        </div>
        <div className="bottom">
          <p>Other Socials:</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/rafi-salman-al-farizi-39b8752b8/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/alfarizirafisalman/"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <img src={Hero} />
    </div>
  )
}
export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Footer />
    </>
  )
}