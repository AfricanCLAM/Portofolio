import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
// import ExperienceSection from './ExperienceSection';
// import ProjectSection from './ProjectSection';
// import TechSection from './TechSection'
// import Home from './Home';

export default function NavBar() {
  return (
      <nav id="navBar">
        <div className="logo">
          <img src={Logo} />
          <Link to="/">AfricanCLAM</Link>
        </div>
        <div className="nav-links">
          <Link to="/Experience">Experience</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Tech">Tech</Link>
        </div>
      </nav>
  )
}