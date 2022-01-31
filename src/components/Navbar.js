import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between bg-black p-4'>
      <div
        className='text-white font-bold text-lg hover:cursor-pointer'
        onClick={() => navigate('/')}
      >
        Resume Builder
      </div>
      <ul className='flex gap-8'>
        <NavLink
          className='bg-teal-200 px-4 py-2 hover:text-teal-800'
          exact
          activeClassName='active'
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className='bg-teal-200 px-4 py-2 hover:text-teal-800'
          exact
          activeClassName='active'
          to='/about'
        >
          About Us
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
