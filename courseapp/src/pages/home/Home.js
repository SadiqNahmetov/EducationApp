import React from 'react';
import Slider from '../../components/slider/Slider';
import Box from '../../components/box/Box';
import Course from '../../components/course/Course';
import RegisterCourse from '../../components/registerSearchCourse/RegisterCourse';
import Service from '../../components/services/Service';
import Event from '../../components/event/Event';
import Student from '../../components/student/Student';


function Home() {
    return (
        <>
            <Slider />
            <Box />
            <Course />
            <RegisterCourse />
            <Service />
            <Student />
            <Event />
          
        </>
    )
}

export default Home;