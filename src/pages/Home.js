import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className='text-center my-auto h-full'>
      <div>Home page</div>
      <button
        className='bg-teal-200 px-4 py-2'
        onClick={() => navigate('resume')}
      >
        Build your resume
      </button>
    </div>
  );
}

export default Home;
