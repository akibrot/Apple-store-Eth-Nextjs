import React from 'react'

function MissonVision() {
  return (
    <div className='w-screen bg-red-900 flex flex-col md:flex-row items-center justify-center missonvisonbackground bg-cover bg-no-repeat'>
    <div className='flex-[5] h-[80vh]   bg-transparent flex items-center justify-center md:justify-end pb-12 md:pr-4'>
      <div className=' mt-20 md:mt-0 w-[90%] h-[110%] md:w-2/3 md:h-2/3  border-white border-[5px] border-solid relative flex flex-col items-center justify-center' >
        <h1 className='text-white text-4xl font-bold font-sans z-10'>Misson</h1>
        <div className='absolute w-full h-full top-0 left-0 bg-[#00000075] blur-outer z-0'> </div>

        <p className='px-16 z-10 text-white pt-4 font-[roboto condenced] font-bold text-center'>
          To reverse degradation of natural environment, and support societies and government to build a future in which humans live in harmony with nature, by conservation biodiversity, promoting sustainable and equitable use of renewable natural resources.
        </p>
      </div>
    </div>
    <div className='mb-20 md:mb-0 mt-10 md:mt-0 pb-10  flex-[5] h-[80vh]  bg-transparent flex items-center justify-center md:justify-start md:pl-12 pt-12   md:pb-0'>
      <div className='mt-20 md:mt-0 w-[90%] h-[150%] md:w-2/3 md:h-2/3 border-white border-[5px] border-solid relative flex flex-col items-center justify-center' >
        <h1 className='text-white text-4xl font-bold font-sans z-10'>Vision</h1>
        <div className='absolute w-full h-full top-0 left-0 bg-[#0000007a]  backdrop-blur-xl z-0'> </div>

        <p className='px-16 z-10 text-white pt-4 font-[roboto condenced] font-bold text-center'>
        A healthy and prosperous society that values, conserves and sustainably uses nature.
        </p>
      </div>
    </div>
    
  </div>
  )
}

export default MissonVision