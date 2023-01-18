import React from 'react'

const Form = () => {
  return (
    <div>
        <form action="" className='flex flex-col'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className='rounded-[5px] p-2 bg-[#1e1e1e]' placeholder="Enter your name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='rounded-[5px] p-2 bg-[#1e1e1e]' placeholder='yourmail@mail.com' />
            <label htmlFor="message">Message</label>
<input type="text" name="message" id="message" className='rounded-[5px] p-2 bg-[#1e1e1e]' placeholder='Enter a message' />
<button className='border-2 rounded-[5px] p-2 text-white opacity-75 border-slate'>Say hello!</button>
        </form>
    </div>
  )
}

export default Form