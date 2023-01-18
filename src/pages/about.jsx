import React from 'react'
import Resume from '../components/about/resume'
import Skillstack from '../components/about/skillstack'
import Summary from '../components/about/summary'

const About = () => {
  return (
    <>
    <div className='mx-[36px]' >
    <div className='text-white text-2xl font-bold'>About</div>
    <Summary/>
    <Skillstack/>
    <Resume/>
</div>
    </>
  )
}

export default About