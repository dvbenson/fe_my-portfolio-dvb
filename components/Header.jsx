import React from 'react'

//padding and margin needs responsive work and the text needs to be responsive specifically the tag
export default function Header({tag, title}) {
  return (
    <div className='mx-auto px-4 sm:px-8 w-full'>
        <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-[#444545]'>
          <div className='absolute transform translate-x-8 -translate-y-10 flex items-center justify-center'>
            <p className='text-[#EDE7E3] xxs:text-sm sm:text-base xxs:mr-48 mr-64 sm:mr-72 font-heading'>{tag}</p>
          </div>
          <div
            className='relative flex items-center justify-center py-2'
            style={{
              background:
                'linear-gradient(to right, #CCFF00, #FFEA20 55%, #FF7A18)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <h1 className='text-electric-lime xxs:text-5xl xs:text-6xl sm:text-7xl font-heading'>
              {title}<span className='text-[#E9E3E6]'>.</span>
            </h1>
          </div>
        </div>
      </div>
  )
}
