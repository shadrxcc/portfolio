import React from 'react'
import Skillstack from '../components/about/skillstack'
import Summary from '../components/about/summary'

const About = () => {
  return (
    <>
    <div className='mx-[36px]' >
    <div className='text-white text-2xl font-bold'>About</div>
    <Summary/>
    <Skillstack/>
</div>
    </>
  )
}

export default About