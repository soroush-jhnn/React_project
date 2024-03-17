import React from 'react'
import NewsComponent from './NewsComponent'

import pic1 from '../../assets/images/landingPage/jscode.jpg'

export default function News() {

  const news = [
    { id: 0, value: "هوش مصنوعی", src: pic1 },
    { id: 1, value: "وب", src: pic1 },
    { id: 2, value: "طراحی رابط کاربری", src: pic1 },
    { id: 3, value: "داده", src: pic1 },
  ];

  return (
    <div className='container mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:max-w-7xl lg:mt-44'>
      <div className="mx-auto text-2xl font-semibold items-center w-1/3 mt-28 mb-12 sm:mb-4">
        <center>اخبار و مقالات</center>
      </div>
      <div className="border-4 border-[#F2D98D] w-1/4 h-16 relative hidden sm:flex top-10 md:left-12 lg:left-16
         -z-10">
         </div>
      <div className="grid grid-cols-1 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2 w-3/4 mx-auto">
        {news.map(number => 
          <NewsComponent key={number.id} title={number.value} src={number.src}/>)
        }
      </div>
      <div className="border-4 border-[#B3E9F3] w-1/6 h-32 relative hidden sm:flex bottom-24 right-14 
         -z-10 float-right">
         </div>
         
      </div>
  )
}
