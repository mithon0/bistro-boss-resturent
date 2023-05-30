import React, { useEffect, useState } from 'react';
import bgImg from '../assets/login/Rectangle 75.png';
import loginImg from '../assets/login/authentication2 1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link } from 'react-router-dom';
import { BsFacebook,BsGoogle,BsGithub } from "react-icons/bs";



const Login = () => {
    const [showPass, setShowPass] = useState(false);


    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const passwordShowHandler = () => {
        if (showPass === true) {
            setShowPass(false);
        }
        else {
            setShowPass(true);
        }
    }
    return (
        <div className='md:h-[650px] ' style={{ backgroundImage: `url("${bgImg}")` }}>
            <div className='grid grid-cols-2 border pt-10'>
                <div>
                    <img className='w-[400px] mx-auto mt-40' src={loginImg} alt="" />
                </div>
                <div>
                    <form className='mt-16 w-[500px]'>

                        <div className=' '>
                            <h1 className='mb-5 text-center text-4xl text-[#151515] font-bold'>Login</h1>
                            <label className='text-[#444444] text-sm font-semibold' htmlFor="email">Email</label><br />
                            <input className='border w-full p-2 mt-2 rounded-lg' type="email" />
                        </div>
                        <div className='mt-5 '>
                            <label className='text-[#444444] text-sm font-semibold' htmlFor="password">PassWord</label><br />
                            <input className='border w-full p-2 mt-2 rounded-lg' type={showPass ? 'text' : 'password'} /><br />
                            <input onClick={passwordShowHandler} type="checkbox"></input> <small>Show passWord</small>
                        </div>
                        {/* captcha */}
                        <div>
                        <LoadCanvasTemplate />
                        <input className='border w-full p-2 mt-2' type='text' /><br />
                        </div>
                        <input className='w-full p-2 mt-3 bg-[#D1A054B2] text-white rounded-lg' type="submit" />
                        <small className='text-[#D1A054]'>New Here?<Link to='/register'>Create new account</Link></small>
                        <p className='text-center mt-6 font-semibold'>Or sign in with</p>
                        <div className='flex justify-center mx-auto gap-10 mt-5'>
                            <BsFacebook className='text-4xl'/>
                            <BsGoogle className='text-4xl'/>
                            <BsGithub className='text-4xl'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;