import React from 'react';
import { useResume } from '../Context/resumeContext';
import { onButtonClick } from '../Utils/pdfConvert';

function Template2() {
  const {
    state: { personal, education, work, skills },
  } = useResume();
  return (
    <div>
      <div
        className='mx-auto bg-teal-200 px-4 py-2 w-fit cursor-pointer mt-6'
        onClick={onButtonClick}
      >
        Download as pdf
      </div>
      <div className='border-2 border-black m-10 w-5/12 mx-auto'>
        <div className='m-10 ' id='my-node'>
          <div className='font-bold text-3xl text-blue-700 text-center'>
            {personal.firstName} {personal.lastName}
          </div>
          <div className='flex justify-between mt-10 border-t-black border-b-black border-t-2  border-b-2 p-4'>
            <div>{personal.email}</div>
            <div>{personal.phone}</div>
            <div>
              <a href={personal.websites}>{personal.websites}</a>
            </div>
          </div>
          <div className='mt-10'>
            <div className='text-2xl bg-blue-400 p-4'>Professional Summary</div>
            <div className='mt-2 text-justify'>{personal.about}</div>
          </div>
          <div className='mt-10'>
            <div className='text-2xl bg-blue-400 p-4'>Employment History</div>
            {work.map((experience) => {
              return (
                <div className='mt-4 flex justify-around gap-4'>
                  <div className='flex align-middle gap-2 grow w-2/6'>
                    <div className='mt-2'>{experience.startDate}</div>
                    <div className='mt-2'>-</div>
                    <div className='mt-2'>{experience.endDate}</div>
                  </div>
                  <div className='border-r-black border-r-2 border-dotted'></div>
                  <div>
                    <div className='mt-2 font-bold'>{experience.title}</div>
                    <div className='mt-2 font-bold'>{experience.employer}</div>
                    <div className='mt-2'>{experience.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='mt-10'>
            <div className='text-2xl bg-blue-400 p-4'>Education</div>
            {education.map((school) => {
              return (
                <div className='mt-4 flex gap-4'>
                  <div className='grow-0 w-1/6 max-w-sm'>
                    <div className='mt-2'>{school.date}</div>
                  </div>
                  <div className='border-r-black border-r-2 border-dotted'></div>
                  <div>
                    <div className='mt-2 font-bold'>{school.school}</div>
                    <div className='mt-2 font-bold'>{school.place}</div>
                    <div className='mt-2'>{school.degree}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='mt-10'>
            <div className='text-2xl bg-blue-400 p-4'>Skills</div>
            <ul className='flex mt-4'>
              {skills.map((skill) => {
                return (
                  <li className='p-6 m-4 bg-blue-400 rounded-full'>{skill}</li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template2;
