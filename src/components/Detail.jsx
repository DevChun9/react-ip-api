import React from 'react'

function Detail({Location}) {
  return (
    <div className='z-[999] md:flex text-center md:text-start justify-between bg-white relative top-[-22rem] md:top-[-2.5rem] w-5/6 md:2/3 lg:w-1/2 m-auto p-6 shadow-xl rounded-xl'>
        <div className='mb-4'>
            <h1 className='text-xs text-gray-600 font-semibold'>IP ADDRESS</h1>
            {Location.length === 0? <h1 className='animate-pulse'>Loading...</h1> : <h1 className='font-semibold text-2xl'>{Location.ip}</h1>}
        </div>
        <div className='mb-4'>
            <h1 className='text-xs text-gray-600 font-semibold uppercase'>Location</h1>
            {Location.length === 0? <h1 className='animate-pulse'>Loading...</h1> : <h1 className='font-semibold text-2xl'>{Location.location? Location.location.city : null}</h1>}
        </div>
        <div className='mb-4'>
            <h1 className='text-xs text-gray-600 font-semibold uppercase'>timezone</h1>
            {Location.length === 0? <h1 className='animate-pulse'>Loading...</h1> : <h1 className='font-semibold text-2xl'>{Location.location? Location.location.timezone : null}</h1>}
        </div>
        <div>
            <h1 className='text-xs text-gray-600 font-semibold uppercase'>isp</h1>
            {Location.length === 0? <h1 className='animate-pulse'>Loading...</h1> : <h1 className='font-semibold text-2xl'>{Location.isp}</h1>}
        </div>
    </div>
  )
}

export default Detail