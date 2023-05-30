import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating'
import { VscQuote } from "react-icons/vsc";

import '@smastrom/react-rating/style.css'

import { Pagination, Navigation } from "swiper";
import SectionTitle from '../../components/SectionTitle/SectionTitle';
const Testmonials = () => {
    const [testmonial, setTestmonial] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setTestmonial(data)
            })
    }, [])


    return (
        <div>
            <div>
                <SectionTitle
                    subHeading="What Our Clients Say"
                    heading="TESTIMONIALS"
                ></SectionTitle>
            </div>

            <Swiper
               
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >


                {
                    testmonial.map(test => <SwiperSlide
                        key={test._id}
                    >
                        <Rating className='mx-auto'
                            style={{ maxWidth: 180 }}
                            value={test.rating}
                            readOnly
                        />
                        <VscQuote
                        className='text-9xl mx-auto font-extrabold m-10'
                        />

                        <div className='text-center'>
                        <p className='text-[#444444] text-xl px-20 pb-2'>{test.details}</p>
                        <h3 className='text-[#CD9003] mb-20 text-4xl'>{test.name}</h3>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testmonials;