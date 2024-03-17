import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route, Navigate } from "react-router-dom";

import Login from '../src/components/LoginPage/Login';
import SignUp from '../src/components/SignUpPage/SignUp';
import Courses from '../src/components/CoursePage/Course';
import Teachers from '../src/components/TeacherPage/Teacher';
import Articles from '../src/components/ArticlePage/Article';
import Contact from '../src/components/ContactPage/ContactUs';
import Landing from '../src/components/LandingPage/Landing';
import Dashboard from '../src/components/UserPanel/UserPanel';
import ShopList from '../src/components/ShopList/ShoppingList'
import NotFound from '../src/components/NotFound/NotFound';
import CourseDetails from '../src/components/CoursePage/CourseDetails'
import ArticleDetails from './components/ArticlePage/ArticleDetails';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './components/common/Error';
// import { AuthProvider, useAuth } from './context/auth/auth.context';


function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Navbar />
      <div>
        <Routes>
          <Route exact path='/' element={<Landing />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/courses/:id' element={<CourseDetails />}/>
          <Route path='/teachers' element={<Teachers />}/>
          <Route path='/articles' element={<Articles />}/>
          <Route path='/articles/:id' element={<ArticleDetails />}/>
          <Route path='/contactus' element={<Contact />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/shoplist' element={<ShopList />}/>
          <Route path='/error404' element={<NotFound />}/>
          <Route path="*" element={<Navigate to='/error404' />}/>         
        </Routes>
      </div>
    </ErrorBoundary>
  )
}

export default App