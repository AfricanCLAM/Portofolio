/* eslint-disable react/no-unescaped-entities */
import {FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaLaravel} from "react-icons/fa";
import { SiExpress, SiMysql, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import NavBar from "./NavBar";
import Footer from "./footer";

export default function TechSection() {
    return(
      <>
      <NavBar />
      <div className="tech" id="tech">
          <h2>Tech stack</h2>
          <div className="items">
              <div className="item">
                  <a href="#">Frontend</a>
                  <p>here's the tech used for the Frontend section</p>
                  <div className="icons">
                  <FaHtml5 size={'50px'}/>
                  <FaCss3Alt size={'50px'}/>
                  <FaBootstrap size={'50px'}/>
                  <FaReact size={'50px'}/>
                  <SiTailwindcss size={'50px'}/>
                  </div>
              </div>
              <div className="item">
                  <a href="#">Backend</a>
                  <p>here's the tech i used for the backend</p>
                  <div className="icons">
                  <FaNodeJs size={'50px'}/>
                  <SiExpress size={'50px'}/>
                  <SiMysql size={'50px'}/>
                  <SiPostgresql size={'50px'}/>
                  <FaPhp size={'50px'}/>
                  <FaLaravel size={'50px'}/>
                  </div>
              </div>
          </div>
      </div>
      <Footer />
      </>
    )
  }