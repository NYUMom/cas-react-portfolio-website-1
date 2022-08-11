import React from 'react'
import './about.css'
import ME from '../../assets/CS-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        
        <div className="about__content"> 
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>7+ CLients Worldwide</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Projects</h5>
              <small>+ Built and Deployed</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About