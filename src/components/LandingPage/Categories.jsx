import React from 'react'

import ServiceComponent from './ServiceComponent'

import pic4 from '../../assets/images/landingPage/database-svgrepo-com.svg';
import pic3 from '../../assets/images/landingPage/Mask Group 15.svg';
import pic2 from '../../assets/images/landingPage/Mask Group 12.svg';
import pic1 from '../../assets/images/landingPage/Mask Group 13.svg';

import pic from '../../assets/images/svg/Mask Group 1.svg';


export default function Categories() {
  const compos = [
    { id: 0, value: "هوش مصنوعی", src: pic1 },
    { id: 1, value: "وب", src: pic2 },
    { id: 2, value: "طراحی رابط کاربری", src: pic3 },
    { id: 3, value: "داده", src: pic4 }
  ];

  return (
    <div className='container mx-auto w-11/12 xl:max-w-7xl -mt-48'>
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-between'>
        <div className='hidden lg:flex'></div>
        <div className="mx-auto mb-16 lg:-mb-16 w-1/2 text-2xl font-semibold relative top-8"><center>دسته بندی ها</center></div>
      </div>
      <div className="border-4 border-[#3DD9C9] w-1/6 h-40 relative hidden lg:flex lg:top-32 right-8 
        -z-10 float-right">
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-5/6 md:w-full mx-auto md:float-left'>
        <div className='w-5/6 flex justify-center mx-auto'>
          <img className='flex items-center justify-center bg-contain bg-center mb-10 w-[80%] mt-[20%]' src={pic} alt="hero-svg-pic" />
        </div>
        <div className="grid grid-cols-1 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2 w-[80%] xl:w-3/4 mx-auto">
          {compos.map(number => 
            <ServiceComponent key={number.id} title={number.value} src={number.src}/>)
          }
        </div>
      </div>
      <div className="border-4 border-[#B3E9F3] w-1/6 h-40 relative hidden lg:flex lg:bottom-36 md:right-80 xl:right-96 
        -z-10 float-right">
      </div>
    </div>
  )
}
