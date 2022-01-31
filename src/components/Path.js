import React from 'react';

function Path({ path }) {
  let personal = true;
  let experience = [
    '/resume/work',
    '/resume/education',
    '/resume/skill',
    '/resume/download',
  ].includes(path)
    ? true
    : false;
  let education = [
    '/resume/education',
    '/resume/skill',
    '/resume/download',
  ].includes(path);
  let skill = ['/resume/skill', '/resume/download'].includes(path);
  let download = ['/resume/download'].includes(path);
  return (
    <div className='flex justify-center border-2 gap-4'>
      <input type='checkbox' checked={personal} className='p-4 m-1.5 w-4 h-4' />
      <div
        className={`text-xl' ${
          path === '/resume' ? 'font-bold text-teal-500' : ''
        }`}
      >
        Personal details
      </div>
      <input
        type='checkbox'
        checked={experience}
        className='p-4 m-1.5 w-4 h-4'
      />
      <div
        className={`text-xl' ${
          path === '/resume/work' ? 'text-teal-400 font-bold' : ''
        }`}
      >
        Experience
      </div>
      <input
        type='checkbox'
        checked={education}
        className='p-4 m-1.5 w-4 h-4'
      />
      <div
        className={`text-xl' ${
          path === '/resume/education' ? 'font-bold text-teal-400' : ''
        }`}
      >
        Education
      </div>
      <input type='checkbox' checked={skill} className='p-4 m-1.5 w-4 h-4' />
      <div
        className={`text-xl' ${
          path === '/resume/skill' ? 'font-bold text-teal-400' : ''
        }`}
      >
        Skills
      </div>
      <input type='checkbox' checked={download} className='p-4 m-1.5 w-4 h-4' />
      <div
        className={`text-xl' ${
          path === '/resume/download' ? 'font-bold text-teal-600' : ''
        }`}
      >
        Download
      </div>
    </div>
  );
}

export default Path;
