import React, { useRef } from 'react';
import { useResume } from '../Context/resumeContext';
import { personal, education, work, skills } from '../Utils/data';
import { Button } from '@progress/kendo-react-buttons';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

function Template1() {
  // const {
  //   state: { personal, education, work, skills },
  // } = useResume();
  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div>
      <Button primary={true} onClick={handleExportWithComponent}>
        Download
      </Button>

      <div className='border-2 border-black m-10 mx-auto w-4/12'>
        <PDFExport paperSize='A4' ref={pdfExportComponent}>
          <div className='m-2 w-5/6 p-6 text-xs'>
            <div className='font-bold text-xl text-blue-700'>
              {personal.firstName} {personal.lastName}
            </div>
            <div>{personal.email}</div>
            <div>{personal.phone}</div>
            <div>
              <a href={personal.websites}>{personal.websites}</a>
            </div>
            <div className='mt-2'>
              <div className='font-bold text-xl underline text-blue-400'>
                Professional Summary
              </div>
              <div className='mt-2'>{personal.about}</div>
            </div>
            <div className='mt-2'>
              <div className='font-bold text-xl underline text-blue-400'>
                Employment History
              </div>
              {work.map((experience) => {
                return (
                  <div className='mt-2'>
                    <div className='flex justify-between font-bold'>
                      <div className='mt-1'>{experience.title}</div>
                      <div className='mt-1'>{experience.employer}</div>
                    </div>
                    <div className='flex align-middle gap-2'>
                      <div className='mt-1'>{experience.startDate}</div>
                      <div className='mt-1'>-</div>
                      <div className='mt-1'>{experience.endDate}</div>
                    </div>
                    <div>{experience.description}</div>
                  </div>
                );
              })}
            </div>
            <div className='mt-2'>
              <div className='font-bold text-xl underline text-blue-400'>
                Education
              </div>
              {education.map((school) => {
                return (
                  <div className='mt-2'>
                    <div className='flex justify-between font-bold'>
                      <div className='mt-1'>{school.school}</div>
                      <div className='mt-1'>{school.place}</div>
                    </div>
                    <div>{school.degree}</div>
                    <div>{school.field}</div>
                    <div className='mt-1'>{school.date}</div>
                  </div>
                );
              })}
            </div>
            <div className='mt-2'>
              <div className='font-bold text-xl underline text-blue-400'>
                Skills
              </div>
              <ul className='list-disc ml-10 mt-4'>
                {skills.map((skill) => {
                  return <li>{skill}</li>;
                })}
              </ul>
            </div>
          </div>
        </PDFExport>
      </div>
    </div>
  );
}

export default Template1;
