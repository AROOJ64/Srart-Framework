import React from 'react'
import avatar from './../../assets/avatar.svg'
import Title from '../../Componants/Title/Title'

export default function () {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-35 bg-teal-500'>
      <div className='w-75'>
        <img className='w-full' src={avatar} alt="" />
      </div>
      <Title content="start Framework" color="white" />
      <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
