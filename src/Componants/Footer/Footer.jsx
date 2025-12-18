import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="bg-slate-700">
        <div className="max-w-6xl mx-auto custom-padding grid lg:grid-cols-3 gap-8 text-white">

          <div className="text-center">
            <h1 className="uppercase font-bold text-xl mb-2">Location</h1>
            <p>2215 John Daniel Drive</p>
            <p className="py-1">Clark, MO 65243</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h1 className="text-2xl font-bold">AROUND THE WEB</h1>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full border flex justify-center items-center hover:bg-white hover:text-slate-700 transition">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="w-10 h-10 rounded-full border flex justify-center items-center hover:bg-white hover:text-slate-700 transition">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="w-10 h-10 rounded-full border flex justify-center items-center hover:bg-white hover:text-slate-700 transition">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="w-10 h-10 rounded-full border flex justify-center items-center hover:bg-white hover:text-slate-700 transition">
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">ABOUT FREELANCER</h1>
            <p className="max-w-xs mx-auto">
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>

        </div>
      </div>

      <p className="text-center py-6 bg-slate-800 text-white">
        Copyright © Your Website 2021
      </p>
    </footer>
  )
}

