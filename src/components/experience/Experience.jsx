import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div classname='container experience__container'>
        <div className='experience__frontend'>
          <h3>FrontEnd Development</h3>
            <div className='experience __content'>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>React Native</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>
        </div>
        
        <div className='experience__backend'>
        <h3>BackEnd Development</h3>
            <div className='experience __content'>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill />
                <h4>Postman</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience