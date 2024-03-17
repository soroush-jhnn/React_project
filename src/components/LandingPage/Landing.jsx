import React from 'react'

import SrartLearning from './SrartLearning'
import Services from './Services'
import Categories from './Categories'
import Courses from './Courses'
import Teachers from './Teachers'
import News from './News'
import CS from './CS'
import Footer from '../Footer/Footer'

export default function Landing() {
  return (
    <React.Fragment>
      <SrartLearning />
      <Services />
      <Categories />
      <Courses />
      <Teachers />
      <News />
      <CS />
      <Footer /> 

    </React.Fragment>
    
  )
}
