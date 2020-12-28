import React, { useEffect } from 'react'
import Slider from '../Slider';
import Feature from '../Feature';
import Form12 from '../Form12';
import Specifications from '../Specifications';
import Testimonials from '../Testimonials';
import News from '../News';
import AboutMain from '../AboutMain';
import Course from '../Course';
import EventCalender from '../EventCalender';
const Home: React.SFC = props => {

    useEffect(() => {
        // refreshPage()
        // alert("I m locading")
    }, [])


    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            <Slider name="slider" />
            {/* Role Based Training */}
            <Feature />

            {/* Software Development Services */}
            <AboutMain />

            {/* Book a Demo */}
            <Course />
            {/* Find a course */}
            <Form12 />
            {/* 60 Professionla Instructor */}
            <Specifications />
            {/* Our Speciality Course */}
            <News />
            {/*Hear what our students have to say  */}
            {/* What our customers say */}
            <Testimonials />
            {/* eventcalender */}
            <EventCalender />
        </div>
    )
}

export default Home
