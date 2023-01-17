import React from 'react'
import { MdInsertLink } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import '../project/project.css'
import { projectarr } from '../project/projectarr'

const Project = () => {
const projects = projectarr.map((project, index) => {
  return (
    <>
<div className='card' key={index}>
            <div className='flex'>
                <p>{project.title}</p>
                <span>
                    <MdInsertLink />
                    <AiOutlineGithub />
                </span>
            </div>
            <p className="desc">{project.description}</p>
<p className='stack'>{project.stack}</p>
        </div></>
  )
})

  return (
    <div className="row">

      {projects}
    </div>
  )
}

export default Project