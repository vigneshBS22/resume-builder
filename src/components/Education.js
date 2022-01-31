import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../Context/resumeContext';
import Input from './Input';

function Education() {
  const navigate = useNavigate();

  const initialState = {
    school: '',
    place: '',
    field: '',
    degree: '',
    date: '',
  };

  const {
    state: { education },
    dispatch,
  } = useResume();

  const [details, setDetails] = useState(education);

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

  return (
    <div className='w-6/12 mx-auto'>
      <div className='text-left mt-10'>
        <div className='font-bold'>COMPLETE YOUR RESUME HEADING</div>
        <div>Employers will use this information to contact you.</div>
      </div>
      {details.map((detail, index) => {
        return (
          <div class='grid grid-cols-2 gap-4 my-10'>
            <div class='grid grid-cols-2 gap-4 col-span-2'>
              <Input
                title={'School Name'}
                name={'school'}
                value={details.school}
                changeHandler={changeHandler}
              />
              <Input
                title={'Place'}
                name={'place'}
                value={details.place}
                changeHandler={changeHandler}
              />
              <Input
                title={'Field of study'}
                name={'field'}
                value={details.field}
                changeHandler={changeHandler}
              />
              <Input
                title={'Degree'}
                name={'degree'}
                value={details.degree}
                changeHandler={changeHandler}
              />
              <Input
                title={'Graduation Date'}
                name={'date'}
                type={'month'}
                value={details.date}
                changeHandler={changeHandler}
              />
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
          + Add another
        </button>
      </div>
      <button
        className='bg-teal-200 px-4 py-2'
        onClick={() => {
          dispatch({ type: 'SET_EDUCATION', payload: details });
          navigate('/resume/skill', { replace: true });
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Education;
