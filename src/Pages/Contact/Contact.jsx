import React from 'react'
import Title from '../../Componants/Title/Title'

export default function Contact() {
  return (
    <div className='py-10'>
      <Title content="contact section" color="slate-800" />

      <form className='max-w-2xl mx-auto mt-10 flex flex-col gap-8'>
        
        <div className='flex flex-col gap-2'>
          <label className='text-slate-700'>userName</label>
          <input
            type="text"
            className='border-b border-gray-300 focus:border-teal-500 outline-none py-2'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-slate-700'>userAge</label>
          <input
            type="number"
            className='border-b border-gray-300 focus:border-teal-500 outline-none py-2'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-slate-700'>userEmail</label>
          <input
            type="email"
            className='border-b border-gray-300 focus:border-teal-500 outline-none py-2'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-slate-700'>userPassword</label>
          <input
            type="password"
            className='border-b border-gray-300 focus:border-teal-500 outline-none py-2'
          />
        </div>

        <button
          type="submit"
          className='bg-teal-500 text-white w-fit px-6 py-2 rounded-md hover:bg-teal-600 transition'
        >
          send Message
        </button>

      </form>
    </div>
  )
}
