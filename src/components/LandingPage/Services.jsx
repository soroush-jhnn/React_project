import React from "react"; 

import ServiceComponent from './ServiceComponent'

import pic4 from '../../assets/images/landingPage/consullingIcon.svg';
import pic3 from '../../assets/images/landingPage/certificateIcon.svg';
import pic2 from '../../assets/images/landingPage/examIcon.svg';
import pic1 from '../../assets/images/landingPage/jobIcon.svg';

export default function Services() {
  
  const compos = [
    { id: 0, value: "فرصت های شغلی", src: pic1 },
    { id: 1, value: "امتحان", src: pic2 },
    { id: 2, value: "مدرک معتبر", src: pic3 },
    { id: 3, value: "مشاوره", src: pic4 }
  ];

  return (
    <>
      <div className="container mx-auto md:mt-40 w-10/12 lg:w-11/12 xl:max-w-7xl">
        <div className="mx-auto mb-24 pt-10 flex justify-center text-2xl font-semibold w-full">خدمات ما</div>
        <div className="grid grid-cols-1 sm:gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-9/12 lg:w-5/6 mx-auto">
        {compos.map(number => 
          <ServiceComponent key={number.id} title={number.value} src={number.src}/>)
          }
        </div>
        <div className="opacity-0 sm:opacity-100 border-4 border-[#B3E9F3] w-1/5 h-40 relative bottom-96 sm:bottom-32 lg:bottom-60 
        right-12 -z-10 float-right">
        </div>
        <div className="opacity-0 sm:opacity-100 border-4 border-[#F2D98D] w-1/5 h-96 relative bottom-96 sm:bottom-80 lg:bottom-72 
        left-10 -z-10">
        </div>
        
      </div>
    </>
  )
}
