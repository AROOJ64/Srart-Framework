import React from 'react'

export default function Title({ content, color }) {
    return (
        <>
            <div className='flex flex-col items-center gap-3'>
                <h1 className={`uppercase text-${color} font-bold text-3xl`}>{content}</h1>
                <div className='flex gap-3 items-center py-2'>
                    <div className={`h-1 w-20 bg-${color}`}></div>
                    <i className={`fa-solid fa-star text-${color}`}></i>
                    <div className={`h-1 w-20 bg-${color}`}></div>
                </div>
            </div>
        </>
    )
}
