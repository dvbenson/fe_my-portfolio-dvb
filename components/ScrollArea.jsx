import React from 'react'

export default function ScrollArea({children}) {
  return (
   
    <div className='mt-16 overflow-y-auto sm:overflow-x-auto w-screen snap-proximity scroll-auto h-[565px]'>
      <div className='ml-[720px]'>
      {children}
      </div>
    </div>
   
  )
}
