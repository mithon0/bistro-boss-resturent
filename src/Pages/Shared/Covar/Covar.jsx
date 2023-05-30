import React from 'react';

const Covar = ({img,title,subTitle}) => {
    return (
        <div>
            <div className="hero h-[500px] " style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full mx-10 px-10 py-11  bg-slate-800 bg-opacity-50">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{subTitle}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Covar;