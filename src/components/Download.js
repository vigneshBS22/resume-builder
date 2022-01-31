import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../Context/resumeContext';

function Download() {
  const navigate = useNavigate();

  return (
    <div className='flex-col'>
      <div className='mx-auto w-fit text-2xl mt-10'>
        Choose the template and download
      </div>
      <div
        className='mx-auto bg-teal-200 px-4 py-2 w-fit cursor-pointer mt-6'
        onClick={() => navigate('/resume/template1')}
      >
        Template 1
      </div>
      <div
        className='mx-auto bg-teal-200 px-4 py-2 w-fit cursor-pointer mt-6'
        onClick={() => navigate('/resume/template2')}
      >
        Template 2
      </div>
      <div
        className='mx-auto bg-teal-200 px-4 py-2 w-fit cursor-pointer mt-6'
        onClick={() => navigate('/resume/template3')}
      >
        Template 3
      </div>
    </div>
  );
}

export default Download;
