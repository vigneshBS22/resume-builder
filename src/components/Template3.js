import React from 'react';
import { useResume } from '../Context/resumeContext';
import { onButtonClick } from '../Utils/pdfConvert';

function Template3() {
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
      <div className='border-2 border-black m-10 w-5/12 mx-auto h-8/12'>
        <div className='m-10 flex-grow' id='my-node'>
          <div className='font-bold text-5xl text-blue-700'>
            {personal.firstName} {personal.lastName}
          </div>
          <div className='flex'>
            <div className='w-4/6'>
              <div className='mt-5'>
                <div className='text-2xl bg-blue-400 p-4'>
                  Professional Summary
                </div>
                <div className='mt-2 text-justify'>{personal.about}</div>
              </div>
              <div className='mt-10'>
                <div className='text-2xl bg-blue-400 p-4'>
                  Employment History
                </div>
                {work.map((experience) => {
                  return (
                    <div className='mt-4 flex justify-around gap-4'>
                      <div className='flex align-middle gap-2'>
                        <div className='mt-2'>{experience.startDate}</div>
                        <div className='mt-2'>-</div>
                        <div className='mt-2'>{experience.endDate}</div>
                      </div>
                      <div className='border-r-black border-r-2 border-dotted'></div>
                      <div>
                        <div className='mt-2 font-bold'>{experience.title}</div>
                        <div className='mt-2 font-bold'>
                          {experience.employer}
                        </div>
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
            </div>
            <div className='m-5 w-2/6'>
              <div className='text-2xl bg-blue-400 p-4'>Personal info</div>
              <div className='flex-col mt-10 border-t-black border-b-black border-t-2  border-b-2 p-4 h-6/12'>
                <div className='my-4'>
                  <div className='font-bold'>Email</div>
                  <div>{personal.email}</div>
                </div>
                <div className='my-4'>
                  <div className='font-bold'>Phone</div>
                  <div>{personal.phone}</div>
                </div>
                <div className='my-4'>
                  <div className='font-bold'>Websites</div>
                  <a href={personal.websites}>{personal.websites}</a>
                </div>
              </div>
              <div className='mt-10'>
                <div className='text-2xl bg-blue-400 p-4'>Skills</div>
                <ul className='flex mt-4 flex-wrap'>
                  {skills.map((skill) => {
                    return (
                      <li className='p-4 m-2 bg-blue-400 rounded-full'>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template3;
