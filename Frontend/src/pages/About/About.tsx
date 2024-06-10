import * as React from 'react';
import Navbar from '../../components/Navbar/Navbar.tsx';
import "./About.scss"
export interface AboutProps {
}

export default function About (props: AboutProps) {
  return (
    <div className='about-page'>
      <Navbar />
      This is an about us page
    </div>
  );
}