import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Featured.css';
import featured from '../../assets/home/featured.jpg';
const Featured = () => {
    return (
        <section className='featured-item '>
            <div className='pt-32'>
                <SectionTitle
                    subHeading='Check it out'
                    heading='FROM OUR MENU'
                ></SectionTitle>
            </div>
            <div className='flex gap-4 pb-52    my-20'>
                <div className='w-[648px] pl-40 pr-12'>
                    <img className='w-[648px]' src={featured} alt="" />
                </div>
                <div className='w-[504px] pt-5 text-white items-center justify-center'>
                    <p>March 20, 2023</p>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, sequi impedit velit sed, alias libero quasi facere facilis magnam adipisci ipsa, quod cupiditate. Enim quibusdam, sint amet facilis voluptatem, sed aut dignissimos eligendi accusamus beatae et molestias! Placeat, iste nostrum?
                    </p>
                    <button className='btn btn-outline border-t-0 border-l-0 border-r-0'>Read more</button>
                </div>
            </div>

        </section>
    );
};

export default Featured;