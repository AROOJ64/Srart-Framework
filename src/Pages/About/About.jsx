import React from 'react'
import Title from '../../Componants/Title/Title'

export default function About() {
  return (
    <div className='py-80 bg-teal-500'>
      <Title content="about componant" color="white" />
      <div className='text-white grid md:grid-cols-2 gap-4 md:px-10 lg:px-20 mx-8'>
        <p className='ps-9'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p className='ps-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
  )
}
