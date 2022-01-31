import React, { createContext, useContext, useReducer } from 'react';

export const ResumeContext = createContext();
export function useResume() {
  return useContext(ResumeContext);
}

export function ResumeProvider({ children }) {
  const personal = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    websites: '',
    about: '',
  };
  const education = [
    {
      school: '',
      place: '',
      field: '',
      degree: '',
      date: '',
    },
  ];
  const work = [
    {
      employer: '',
      title: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ];
  const skills = [];
  function reducerFunc(state, action) {
    console.log(action);
    switch (action.type) {
      case 'SET_PERSONAL':
        return {
          ...state,
          personal: action.payload,
        };
      case 'SET_WORK':
        return {
          ...state,
          work: action.payload,
        };
      case 'SET_EDUCATION':
        return {
          ...state,
          education: action.payload,
        };
      case 'SET_SKILLS':
        return {
          ...state,
          skills: action.payload,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerFunc, {
    personal: personal,
    education: education,
    work: work,
    skills: skills,
  });

  return (
    <ResumeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}
