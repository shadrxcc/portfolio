import React from 'react'
import Form from '../components/contact/form'
import Game from '../components/contact/game'

const Contact = () => {
  return (
    <div className="text-white">
        <div>
        <p className='contact-title'>Contact</p>
        <p className='contact-text'>Want to work with me or say hello?</p>
        <div>
            <Form />
        </div>
        </div>
        <div>
        <p className='contact-title'>Game with me</p>
        <p className='contact-text'>Fancy a 1v1 or br match with me? IDN: coldshotg</p>
        <Game/>
        </div>

    </div>
  )
}

export default Contact