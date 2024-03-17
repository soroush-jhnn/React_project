import phoneFooter3 from '../../assets/images/svg/phoneFooter3.svg';
import mailFooter from '../../assets/images/svg/mailFooter.svg';
import adrFooter from '../../assets/images/svg/adrFooter.svg';
import facebookFooter from '../../assets/images/svg/facebookFooter.svg';
import instaFooter from '../../assets/images/svg/instaFooter.svg';
import telegramFooter from '../../assets/images/svg/telegramFooter.svg';

import footerSvg1 from '../../assets/images/svg/f1-removebg-preview.png';
import footerSvg2 from '../../assets/images/svg/f2-removebg-preview.png';
import React from 'react';

function Footer()
{
    const col1 = [{id:0 ,name: 'عضویت در خبرنامه', styleStr: ' text-lg font-medium'},
                  {id:1 ,name: 'اهداف و ارزشها', styleStr: ' text-sm  '},
                  {id:2 ,name : 'فرصت های شغلی', styleStr: ' text-sm'}];

    const col2 = [{id:0 ,name: 'شبکه های اجتماعی', styleStr: ' text-lg font-medium '},
                {id:1 ,styleStr: ' p-0', pic: <img src= {facebookFooter} alt= '#' className= 'scale-[60%] -mt-4' />},
                {id:2 ,styleStr: ' p-0 -mt-1', pic: <img src= {instaFooter} alt= '#' className= 'scale-[60%] -mt-4' />},
                {id:3 ,styleStr: ' p-0', pic: <img src= {telegramFooter} alt= '#' className= 'scale-[60%] -mt-4' />}];

    const col3 = [{id:0 ,name: 'آدرس', styleStr: ' text-lg font-medium'},
                  {id:1 ,name: 'مازندران، ساری، خیابان ۱۸ دی، ساختمان سپهر', styleStr: ' p-0 text-right md:text-sm lg:text-sm  ', 
                  pic: <img src= {adrFooter} alt= '#' className= 'scale-[100%] pb-6' />}];

    const col4 = [{id:0 ,name: 'ارتباط با ما', styleStr: ' text-lg font-medium'},
                  {id:1 ,name: 'تلفن تماس', styleStr: ' text-sm  ',
                   pic: <img src= {phoneFooter3} alt= '#' className= 'scale-[80%] -ml-2 ' />} ,
                  {id:2 ,name : 'ایمیل', styleStr: ' text-sm   ', 
                  pic: <img src= {mailFooter} alt= '#' className= 'scale-[70%]' />}];

    const col5 = [{id:0 ,name: 'درباره ما', styleStr: ' text-lg font-medium'},
                  {id:1 ,name: 'اهداف و ارزشها', styleStr: ' text-sm '},
                  {id:2 ,name : 'فرصت های شغلی', styleStr: ' text-sm '}];

    

    return(
        <React.Fragment>
          <div className='bg-[#B3E9F3]'>
            <div className= ' grid col-start-auto  lg:grid-cols-5 md:grid-cols-3 gap-y-[40px] pt-6 pr-10 pl-10'>
              <ul className= 'flex-col justify-center order-5 lg:order-none '>{col1.map((item) => <li key={item.id}
              className= {item.styleStr + ' p-2 text-center'}>{item.name}</li>)}</ul>

              <ul className= 'flex-col justify-center order-4 lg:order-none '>{col2.map((item) => <li key={item.id} 
              className= {item.styleStr + ' p-2 text-center flex flex-row justify-center'}>{item.name} {item.pic}</li>)}</ul>
              
              <ul className= 'flex-col justify-center '>{col3.map((item) => <li key={item.id}
              className= {item.styleStr + ' pt-2 text-center flex flex-row justify-center content-center w-2/3 lg:w-full mx-auto'}>
                {item.name} {item.pic}</li>)}</ul>

              <ul className= 'flex-col justify-center '>{col4.map((item) => <li key={item.id} 
              className= {item.styleStr + ' p-2 text-center flex flex-row justify-center'}>{item.name} {item.pic}</li>)}</ul>

              <ul className= 'flex-col justify-center '>{col5.map((item) => <li key={item.id} 
              className= {item.styleStr + ' p-2 text-center'}>{item.name}</li>)}</ul>

              <div className='flex lg:hidden flex-col justify-center '>
                <img src={footerSvg2} alt="footer-svg" className='w-2/3 h-2/3 mx-auto -mt-10' />
                <img src={footerSvg1} alt="footer-svg" className='w-1/3 h-1/3 mx-auto ' />
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='hidden lg:flex flex-row justify-center -mt-16'>
                <img src={footerSvg2} alt="footer-svg" className='w-44 h-44 -mt-4'  />
                <img src={footerSvg1} alt="footer-svg" className='w-32 h-32 relative right-6' />
              </div>
            </div>
            <div className='hidden lg:flex flex-row justify-center relative bottom-4 text-sm'>تمام حقوق این سایت متعلق به آکادمی بحر می باشد</div>
          </div>
        </React.Fragment>
    )
}

export default Footer;