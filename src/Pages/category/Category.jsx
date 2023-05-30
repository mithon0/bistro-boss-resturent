import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


import slidar1 from '../../assets/home/slide1.jpg'
import slidar2 from '../../assets/home/slide2.jpg'
import slidar3 from '../../assets/home/slide3.jpg'
import slidar4 from '../../assets/home/slide4.jpg'
import slidar5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
       <section>
        <SectionTitle
         subHeading={'From 11:00am to 10:00pm'}
         heading={'ORDER ONLINE'}
        >
           
        </SectionTitle>
         <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide>
                <img src={slidar1} alt="" />
                <p className='text-3xl -mt-10 text-center text-white uppercase'>Salads</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slidar2} alt="" />
                <p className='text-3xl -mt-10 text-center text-white uppercase'>Soups</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slidar3} alt="" />
                <p className='text-3xl -mt-10 text-center text-white uppercase'>pizzas</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slidar4} alt="" />
                <p className='text-3xl -mt-10 text-center text-white uppercase'>desserts</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slidar5} alt="" />
                <p className='text-3xl -mt-10 text-center text-white uppercase'>Salads</p>
            </SwiperSlide>

        </Swiper>
       </section>
    );
};

export default Category;