import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Navber = () => {
  const {user,logOutH}=useContext(AuthContext)
  
  const logOutHandler =()=>{
    Swal.fire({
      title: 'Want to logOut?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        logOutH()
    .then(result=>{
        console.log(result);
    })
    .catch(err=>{
      console.log(err.message);
    })

        Swal.fire(
          'LogOut',
          'Your Account signOut.',
          'success'
        )
      }
    })


    
  }
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-7xl bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/manu">Manu</Link></li>
            <li><Link to="/order">Our Shop</Link></li>

            {
              user?<li><Link>LogOut</Link></li>:<li><Link to="/login">login</Link></li>
            }
            

            
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/manu">Manu</Link></li>
          <li><Link to="/order/salad">Our Shop</Link></li>
          <li><Link to="/secret">Secrate</Link></li>
          {
              user?<li><button onClick={logOutHandler} className='btn btn-ghost'>LogOut</button></li>:<li><Link to="/login">login</Link></li>
            }
            
        </ul>
      </div>
      <div className="navbar-end  ">
       <img className='w-10 rounded-full' src={user?.photoURL} alt=""  title={user?.displayName}/>
      </div>
    </div>
  );
};

export default Navber;