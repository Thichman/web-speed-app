'use client'

import Image from 'next/image'
import { useState } from 'react';
import GoogleSpeedTest from './components/googleSpeedTest';


export default function Home() {


  return (
    <div>
      <GoogleSpeedTest />
    </div>
  );
}
