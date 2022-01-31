import React from 'react';
import { useResume } from '../Context/resumeContext';
import { onButtonClick } from '../Utils/pdfConvert';
import { personal, education, work, skills } from '../Utils/data';
function Template1() {
  // const {
  //   state: { personal, education, work, skills },
  // } = useResume();
  return (
    <div>
      <div
        className='mx-auto bg-teal-200 px-4 py-2 w-fit cursor-pointer mt-6'
        onClick={onButtonClick}
      >
        Download as pdf
      </div>
      <div className='border-2 border-black m-10 mx-auto w-4/12'>
        <div className='m-10 w-5/6' id='my-node'>
          <div className='font-bold text-3xl text-blue-700'>
            {personal.firstName} {personal.lastName}
          </div>
          <div>{personal.email}</div>
          <div>{personal.phone}</div>
          <div>
            <a href={personal.websites}>{personal.websites}</a>
          </div>
          <div className='mt-10'>
            <div className='font-bold text-3xl underline text-blue-400'>
              Professional Summary
            </div>
            <div className='mt-2'>{personal.about}</div>
          </div>
          <div className='mt-10'>
            <div className='font-bold text-3xl underline text-blue-400'>
              Employment History
            </div>
            {work.map((experience) => {
              return (
                <div className='mt-4 '>
                  <div className='flex justify-between font-bold'>
                    <div className='mt-2'>{experience.title}</div>
                    <div className='mt-2'>{experience.employer}</div>
                  </div>
                  <div className='flex align-middle gap-2'>
                    <div className='mt-2'>{experience.startDate}</div>
                    <div className='mt-2'>-</div>
                    <div className='mt-2'>{experience.endDate}</div>
                  </div>
                  <div>{experience.description}</div>
                </div>
              );
            })}
          </div>
          <div className='mt-10'>
            <div className='font-bold text-3xl underline text-blue-400'>
              Education
            </div>
            {education.map((school) => {
              return (
                <div className='mt-4'>
                  <div className='flex justify-between font-bold'>
                    <div className='mt-2'>{school.school}</div>
                    <div className='mt-2'>{school.place}</div>
                  </div>
                  <div>{school.degree}</div>
                  <div>{school.field}</div>
                  <div className='mt-2'>{school.date}</div>
                </div>
              );
            })}
          </div>
          <div className='mt-10'>
            <div className='font-bold text-3xl underline text-blue-400'>
              Skills
            </div>
            <ul className='list-disc ml-10 mt-4'>
              {skills.map((skill) => {
                return <li>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template1;
