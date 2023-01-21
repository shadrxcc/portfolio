import React from 'react'
import resume from './Resume(Frontend).pdf'

const Resume = () => {
  return (
    <>
    <div>
      <a className="" href={resume} download><p className='resume md:text-base text-lg text-white'>Get my resume</p></a>
    </div>

    </>
  )
}

export default Resume