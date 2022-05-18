import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/christina-slocumb' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/NYUMom' target='_blank'><FaGithub /></a>
        <a href='https://twitter.com/NYUBossMom' target='_blank'><FaTwitter /></a>

    </div>
  )
}

export default HeaderSocials