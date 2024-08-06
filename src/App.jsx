/* eslint-disable react/no-unescaped-entities */
import './App.css';
//routes to other section or components
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import TechSection from './components/TechSection'
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<ExperienceSection />} />
          <Route path='/Projects' element={<ProjectSection />} />
          <Route path='/Tech' element={<TechSection />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
