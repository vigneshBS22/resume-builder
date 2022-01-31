import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../Context/resumeContext';
import Input from './Input';

function PersonalDetails() {
  const navigate = useNavigate();
  const {
    state: { personal },
    dispatch,
  } = useResume();

  const [details, setDetails] = useState(personal);

  const changeHandler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className='w-6/12 mx-auto'>
      <div className='text-left mt-10'>
        <div className='font-bold'>COMPLETE YOUR RESUME HEADING</div>
        <div>Employers will use this information to contact you.</div>
      </div>
      <div class='grid grid-cols-2 gap-4 my-10'>
        <div class='grid grid-cols-2 gap-4 col-span-2'>
          <Input
            title={'First Name'}
            name={'firstName'}
            value={details.firstName}
            changeHandler={changeHandler}
          />
          <Input
            title={'Last Name'}
            name={'lastName'}
            value={details.lastName}
            changeHandler={changeHandler}
          />
          <Input
            title={'E-mail address'}
            name={'email'}
            value={details.email}
            changeHandler={changeHandler}
          />
          <Input
            title={'Phone number'}
            name={'phone'}
            value={details.phone}
            changeHandler={changeHandler}
          />
          <Input
            title={'Websites'}
            name={'websites'}
            value={details.websites}
            changeHandler={changeHandler}
          />
          <div className='col-span-2'>
            <div>About you</div>
            <textarea
              name='about'
              value={details.about}
              className='border-gray-200 border-2 focus:outline-none p-2 w-full'
              onChange={changeHandler}
            />
          </div>
        </div>
      </div>
      <button
        className='bg-teal-200 px-4 py-2'
        onClick={() => {
          dispatch({ type: 'SET_PERSONAL', payload: details });
          navigate('work', { replace: true });
        }}
      >
        Next
      </button>
    </div>
  );
}

export default PersonalDetails;
