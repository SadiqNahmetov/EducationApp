import React from 'react';
import '../../assets/styles/Course.css'
import Header from '../../components/header/Header';
import Title from '../../components/title/Title';
import Card from '../../components/card/Card';



function Course() {
  return (
    <div className='course-page'>


      <Header />
      <Title />
      <div className='card-area'>
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  )
}

export default Course;