import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../Context/resumeContext';
import Input from './Input';

function WorkExperience() {
  const navigate = useNavigate();

  const initialState = {
    employer: '',
    title: '',
    startDate: '',
    endDate: '',
    description: '',
  };
  const {
    state: { work },
    dispatch,
  } = useResume();
  const [details, setDetails] = useState(work);

  const changeHandler = (e, index) => {
    setDetails([
      ...details.slice(0, index),
      Object.assign({}, details[index], {
        ...details[index],
        [e.target.name]: e.target.value,
      }),
      ...details.slice(index + 1),
    ]);
  };

  // console.log(state);

  return (
    <div className='w-6/12 mx-auto'>
      <div className='text-left mt-10'>
        <div className='font-bold'>COMPLETE YOUR RESUME HEADING</div>
        <div>Employers will use this information to contact you.</div>
      </div>
      {details.map((detail, index) => {
        return (
          <div class='grid grid-cols-2 gap-4 my-10' key={index}>
            <div class='grid grid-cols-2 gap-4 col-span-2'>
              <Input
                title={'Employer'}
                name={'employer'}
                value={details[index].employer}
                changeHandler={changeHandler}
                index={index}
              />
              <Input
                title={'Title'}
                name={'title'}
                value={details.title}
                changeHandler={changeHandler}
                index={index}
              />
              <Input
                title={'Start Date'}
                name={'startDate'}
                value={details[index].startDate}
                changeHandler={changeHandler}
                type={'month'}
                index={index}
              />
              <Input
                title={'End Date'}
                name={'endDate'}
                value={details[index].endDate}
                changeHandler={changeHandler}
                type={'month'}
                index={index}
              />
            </div>
            <div className='col-span-2'>
              <div>Job description</div>
              <textarea
                value={details[index].description}
                name='description'
                onChange={(e) => changeHandler(e, index)}
                className='border-gray-200 border-2 focus:outline-none p-2 w-full'
              />
              <div className='mt-4 w-full border-2 text-black'></div>
            </div>
          </div>
        );
      })}
      <div className='text-center'>
        <button
          className='bg-teal-200 px-4 py-2'
          onClick={() => {
            setDetails([...details, initialState]);
          }}
        >
          + Add another position
        </button>
      </div>

      <button
        className='bg-teal-200 px-4 py-2'
        onClick={() => {
          dispatch({ type: 'SET_WORK', payload: details });
          navigate('/resume/education', { replace: true });
        }}
      >
        Next
      </button>
    </div>
  );
}

export default WorkExperience;
