import React from 'react';
import Slider from '../../components/slider/Slider';
import RegisterCourse from '../../components/registerSearchCourse/RegisterCourse';
import Service from '../../components/services/Service';
import Event from '../../components/event/Event';
import Card from '../../components/card/Card';
import Student from '../../components/student/Student';
import '../../assets/styles/Home.css';
import Title from '../../components/title/Title';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/banner/Banner';


function Home() {
    return (
        <>
        <Navbar />
            <Slider />
            <Banner />
            <Title sectionTitle="Popular Courses"/>
            <Card />
            <RegisterCourse />
            <Service />
            <Student />
            <Event />

            <Footer />
          
        </>
    )
}

export default Home;