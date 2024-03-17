import React from 'react';
// import mesh from '../../assets/images/svg/mesh-gradient.png'

export default function ServiceComponent(props) {
  return (
    <>
      <div className="flex justify-center flex-col py-4 bg-[#F2F2F2] m-2 duration-500 shadow-lg hover:shadow-xl hover:scale-110">
        <div className="w-1/3 mx-auto">
          <img src={props.src} alt={props.title} />
        </div>
        <div className="flex justify-center mt-3 text-base font-semibold">{props.title}</div>
        <div className="flex justify-center mt-3 font-thin text-ellipsis overflow-hidden text-sm">لورم ایپسوم متن ساختگی</div>
        <div className="flex justify-center font-thin text-sm">با تولید سادگی نامفهوم</div>
      </div>
    
    </>
  )
}

// 1221108_04 az matlab
// 1221066_01 proje narm