import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Path from '../components/Path';

function Resume() {
  const location = useLocation();
  return (
    <div>
      <Path path={location.pathname} />
      <Outlet />
    </div>
  );
}

export default Resume;
