import React, { useEffect, useState } from 'react';
import bgImg from '../assets/login/Rectangle 75.png';
import loginImg from '../assets/login/authentication2 1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useRef } from 'react';



const Login = () => {
    const captchaRef =useRef(null);
    const [disable,setDisable]=useState(true);
    const { loginUser, user } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [showPass, setShowPass] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        loginUser(data.email, data.password)
            .then(result => {
                console.log(result.user);

                Swal.fire('login success')
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message);

                Swal.fire(err.message)
            })

    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const captchaHandler=()=>{
        const user_captcha_value=captchaRef.current.value;
        console.log(user_captcha_value);
        if(validateCaptcha(user_captcha_value)){
            setDisable(false);
        }
    }

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
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-16 w-[500px]'>

                        <div className=' '>
                            <h1 className='mb-5 text-center text-4xl text-[#151515] font-bold'>Login</h1>
                            <label className='text-[#444444] text-sm font-semibold' htmlFor="email">Email</label><br />
                            <input {...register("email")} name='email' className='border w-full p-2 mt-2 rounded-lg' type="email" />
                        </div>
                        <div className='mt-5 '>
                            <label className='text-[#444444] text-sm font-semibold' htmlFor="password">PassWord</label><br />
                            <input {...register("password")} name='password' className='border w-full p-2 mt-2 rounded-lg' type={showPass ? 'text' : 'password'} /><br />
                            <input onClick={passwordShowHandler} type="checkbox"></input> <small>Show passWord</small>
                        </div>
                        {/* captcha */}
                        <div>
                            <LoadCanvasTemplate />
                            <input ref={captchaRef} className='border w-full p-2 mt-2' type='text' /><br />
                            <button onClick={captchaHandler} className='w-full btn btn-ghost'>Iam not a Robot</button>
                        </div>
                        <input disabled={disable} className='w-full p-2 mt-3 bg-[#D1A054B2] text-white rounded-lg' type="submit" />
                        <small className='text-[#D1A054]'>New Here?<Link to='/register'>Create new account</Link></small>
                        <p className='text-center mt-6 font-semibold'>Or sign in with</p>
                        <div className='flex justify-center mx-auto gap-10 mt-5'>
                            <BsFacebook className='text-4xl' />
                            <BsGoogle className='text-4xl' />
                            <BsGithub className='text-4xl' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;