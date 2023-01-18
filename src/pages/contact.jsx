import React from 'react'
import Form from '../components/contact/form'
import Game from '../components/contact/game'

const Contact = () => {
  return (
    <div className='mx-[36px] md:mx-[150px]'>
        <div  className="text-white text-2xl font-bold">Contact</div>
        <p className="text-white text-base opacity-50">Want to work with me or say hello?</p>
        <Form/>
        <Game/>
        </div>
  )
}

export default Contact