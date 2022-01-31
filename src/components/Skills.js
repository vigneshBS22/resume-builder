import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../Context/resumeContext';

function Skills() {
  const navigate = useNavigate();
  const {
    state: { skills: stateSkill },
    dispatch,
  } = useResume();
  const [skills, setSkills] = useState(stateSkill);
  const [skill, setSkill] = useState('');
  const addSkill = () => {
    setSkills([...skills, skill]);
  };

  return (
    <div className='w-4/12 mx-auto my-10'>
      <input
        value={skill}
        className='border-black border-2 focus:outline-none p-2 w-96'
        onChange={(e) => {
          setSkill(e.target.value);
        }}
      />
      <button
        className='bg-teal-200 px-4 py-2 rounded-3xl  ml-6'
        onClick={addSkill}
      >
        Add skill
      </button>
      <div className='flex flex-wrap'>
        {skills.map((item) => {
          return (
            <div className='bg-teal-500 m-4 p-2 w-fit rounded-2xl'>{item}</div>
          );
        })}
      </div>
      <div className='align-right'>
        <button
          className='bg-teal-200 px-4 py-2'
          onClick={() => {
            dispatch({ type: 'SET_SKILLS', payload: skills });
            navigate('/resume/download', { replace: true });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Skills;
