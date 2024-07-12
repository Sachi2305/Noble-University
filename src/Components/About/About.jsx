import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
       <img src={about_img} alt='' className='about-img' /> 
       <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className='about-right'>
      <h3>About Univercity</h3>
      <h2>Nurturing Tomorrow's Leaders Today</h2>
      <p>Embark on a transformative educational journey with our university comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knoledge, skils, and experiences needed to excel in the dynamic fied of education.</p>
      <p>With a focus on innovation, hands-on earning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in schools and communities.</p>
      <p>Embark on a transformative educational journey with our university comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knoledge, skils, and experiences needed to excel in the dynamic fied of education.</p>
    </div>
    </div>
  )
}

export default About
