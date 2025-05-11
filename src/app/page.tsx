'use client';

import Brain from '@/app/three-js-brain-animation';
import LearnMore from "./components/learn-more";
import Signup from './components/signup';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import Link from 'next/link';
import { id as learnMoreId } from './components/learn-more';
import { id as signupId } from './components/signup';

export default function Home() {
  const getBrain = (displayClassName: string, screenSize: string = '') => {
    return (
      <div className={`w-full h-full ${displayClassName}`}>
        <Brain screenSize={screenSize} />
      </div>
    );
  };

  return (
    <div className="h-full w-full">
      <div className='w-inherit flex flex-col items-center xl:hidden'>
        <p className='text-5xl md:text-7xl'>Automind System</p>
        <div className="hidden md:flex justify-center w-full space-x-10 mt-10">
          <Button size='lg' variant='secondary' className="animate-pulse">
            <Link className='text-lg' href={`#${learnMoreId}`}>
              Learn more about Automind System
            </Link>
          </Button>
          <Button size='lg' className="bg-cyan-600 text-white animate-pulse">
            <Link className='flex items-center text-lg' href={`#${signupId}`}>
              Signup for early product launch
              <Rocket className='ml-1' />
            </Link>
          </Button>
        </div>
      </div>
      {getBrain('block md:hidden', 'sm')}
      {getBrain('hidden md:block xl:hidden')}
      {getBrain('hidden xl:block', 'xl')}
      <LearnMore />
      <Signup />
    </div>
  );
}
