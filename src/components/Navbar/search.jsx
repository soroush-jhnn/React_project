import React from 'react'

export default function search() {
  return (
   <div className='float-left w-1/4 lg:w-1/6 overflow-auto'>
      <div className="hidden sm:flex items-center float-right">
      <input dir='rtl' type="search" placeholder="جست و جو ..."
            className=" py-1 border-b-2 border-gray-500 outline-none px-4 focus:border-[#A066F2]" />
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      </div>
   </div>
  )
}
