import React from 'react';

function Input({
  title,
  name,
  value,
  changeHandler,
  type = 'text',
  index = null,
}) {
  return (
    <div>
      <div>{title}</div>
      <input
        value={value}
        name={name}
        type={type}
        className='border-gray-200 border-2 focus:outline-none p-2 w-96'
        onChange={(e) => changeHandler(e, index)}
      ></input>
    </div>
  );
}

export default Input;
