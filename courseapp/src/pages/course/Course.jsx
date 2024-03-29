import React from 'react';
import '../../assets/styles/Course.css'
import Header from '../../components/header/Header';
import Title from '../../components/title/Title';
import Card from '../../components/card/Card';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';



function Course() {
  return (

    <>
      <Navbar />

      <div className='course-page'>
        <Header sectionHeader="Courses" />
        <Title sectionTitle="Popular Courses"/>

        <div className='card-area'>
          <Card />
        </div>

      </div>

      <Footer />

    </>
  )
}

export default Course;





