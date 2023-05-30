import React, { useEffect, useState } from 'react';
import bgImg from '../assets/login/Rectangle 75.png';
import loginImg from '../assets/login/authentication2 1.png';
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Signup = () => {
    const {registerd}=useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
       
        const email =data.email;
        const password =data.password;
        registerd(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(err=>{
            console.log(err.massage);
        })
        
    }

    const [showPass, setShowPass] = useState(false);




    const passwordShowHandler = () => {
        if (showPass === true) {
            setShowPass(false);
        }
        else {
            setShowPass(true);
        }
    }
    return (
        <div className='md:h-[720px] ' style={{ backgroundImage: `url("${bgImg}")` }}>
            <div className='grid grid-cols-2 border pt-10'>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-16 ml-24 w-[500px]'>

                        <div className=' '>
                            <h1 className='mb-5 text-center text-4xl text-[#151515] font-bold'>Sign Up</h1>
                            <label className='text-[#444444] text-sm font-semibold' htmlFor="name">Name</label><br />
                            <input {...register("name", { required: true })} name='name' placeholder='Full name' className='border w-full p-2 mt-2 rounded-lg' type="text" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className=' '>

                            <label className='text-[#444444] text-sm font-semibold' htmlFor="photoURL">PhotoUrl</label><br />
                            <input {...register("photo", { required: true })} name='photo' className='border w-full p-2 mt-2 rounded-lg' type="text" placeholder='PhotoURL' />
                            {errors.photo && <span className='text-red-600'>PhotoUrl is required</span>}
                        </div>
                        <div className=' '>

                            <label className='text-[#444444] text-sm font-semibold' htmlFor="email">Email</label><br />
                            <input {...register("email", { required: true })} className='border w-full p-2 mt-2 rounded-lg' type="email" name='email' placeholder='Email' />
                            {errors.email && <span className='text-red-600'>email is required</span>}
                        </div>
                        <div className='mt-5 '>
                            <label className='text-[#444444] text-sm font-semibold' htmlFor="password">PassWord</label><br />
                            <input {...register("password", {
                                required: true,
                                maxLength: 20,
                                minLength: 6,
                               
                            })} name='password' placeholder='password' className='border w-full p-2 mt-2 rounded-lg' type={showPass ? 'text' : 'password'} /><br />
                            {errors.password?.type ==="required" && <span className='text-red-600'>password is required</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-600'>password must be less then 20 cherecter </span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-600'>password must be 6 cherecter </span>}
                            {/* {errors.password?.type === 'pattern' && <span className='text-red-600'>Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</span>} <br /> */}
                            <input onClick={passwordShowHandler} type="checkbox"></input> <small>Show passWord</small>
                        </div>


                        <input className='w-full p-2 mt-3 bg-[#D1A054B2] text-white rounded-lg' type="submit" />
                        <small className='text-[#D1A054]'>New Here?<Link to='/register'>Create new account</Link></small>
                        <p className='text-center mt-6 font-semibold'>Or sign in with</p>
                        <div className='flex justify-center mx-auto gap-10 mt-5'>
                            <BsFacebook className='text-4xl' />
                            <BsGoogle className='text-4xl' />
                            <BsGithub className='text-4xl' />
                        </div>
                    </form>
                </div>
                <div>
                    <img className='w-[400px] mx-auto mt-40' src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Signup;