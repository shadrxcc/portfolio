import React from 'react'
import './contact.css'

const Form = () => {
  return (
    <div>
        <form action="" className='form'>
            <label className='label' htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder='Enter your name' />
            <label className='label' htmlFor="email">Email</label>
            <input type="email" name="email" id="mail" placeholder='yourmail@mail.com' />
            <label className='label' htmlFor="message">Message</label>
            <input type="text" name="message" id="message" placeholder='Enter your message'></input>
            <button className='hello'>Say hello!</button>
        </form>
    </div>
  )
}

export default Form