import React, { useState } from 'react'
import Title from '../../Componants/Title/Title'
import port1 from './../../assets/poert1.png'
import port2 from './../../assets/port2.png'
import port3 from './../../assets/port3.png'

export default function Portfolio() {
  const arr = [port1, port2, port3, port1, port2, port3]
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="py-10">
      <Title content="portfolio component" color="slate-800" />

      <div className="py-5 mx-40 custom-padding grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {arr.map((img, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setSelectedImg(img)}
          >
            <img src={img} alt="" className="w-full rounded-xl" />

            <div className="absolute inset-0 flex justify-center items-center bg-teal-500/70 opacity-0 group-hover:opacity-100 transition duration-300">
              <i className="fa-solid fa-plus text-white text-[100px]"></i>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img src={selectedImg} alt="" className="w-1/2 rounded-xl" />
        </div>
      )}
    </div>
  )
}
