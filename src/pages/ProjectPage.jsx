import React from 'react'
import images from '../images/images'
import './project.scss'

const ProjectPage = () => {


    
  return (
    <div>
        <h1>THIS IS PROJECT PAGE</h1>
        {images.map((image, index) => (
          <div key={image} className='img-container'>
            <img src={image} alt={`people ${index}`}/>
          </div>
        ))}
    </div>
  )
}

export default ProjectPage