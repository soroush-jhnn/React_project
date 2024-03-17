import React from 'react'

export default function NewsComponent(props) {
  return (
    <>
      <div className="flex justify-center flex-col pb-4 bg-[#F2F2F2] m-3 duration-500 shadow-lg hover:shadow-xl hover:scale-105 ">
        <div className="w-full mx-auto">
          <img className='h-56 w-full' src={props.src} alt={props.title} />
        </div>
        <div className="flex justify-center mt-3 text-lg ">{props.title}</div>
        <div className="flex justify-center mt-3 font-light text-ellipsis overflow-hidden">لورم ایپسوم متن ساختگی</div>
        <div className="flex justify-center font-light">با تولید سادگی نامفهوم</div>
        <button className='text-white w-1/4 mt-5 mx-auto flex justify-center py-1 px-12 rounded-full font-base
        bg-gradient-to-r from-[#3DD9C9] to-[#41ABC5] hover:bg-gradient-to-bl'> مطالعه</button>
      </div>
    
    </>
  )
}
