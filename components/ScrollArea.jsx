import React from 'react'

export default function ScrollArea({children}) {
  return (
   <div className='mx-auto px-4 w-full'>
    <div className='my-16 max-sm:snap-x sm:snap-y max-sm:overflow-x-auto sm:overflow-y-flow overflow-y-scroll scroll-smooth max-sm:h-[520px]'>
      {children}
    </div>
   </div>
  )
}
