import React from 'react';

import ErrorSvg from '../../assets/images/svg/error404.svg'
import Footer from '../Footer/Footer';

const NotFound = () => {
  return (
    <>
      <div className='m-16 mb-28'>
        <img src={ErrorSvg} alt="error-svg" />
      </div>
      <Footer />
    </>
  )
}

export default NotFound