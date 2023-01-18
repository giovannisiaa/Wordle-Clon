import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

export default function Root() {
  return (
    <>
      <Header />
      <div id="ventanas">
        <Outlet />
      </div>
    </>
  );
}

