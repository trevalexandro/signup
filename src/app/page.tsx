'use client';

import Brain from '@/app/three-js-brain-animation';
import LearnMore from "./components/learn-more";
import Signup from './components/signup';

export default function Home() {
  const getBrain = (screenSize: string, displayClassName: string) => {
    return (
      <div className={`w-full h-full ${displayClassName}`}>
        <Brain screenSize={screenSize} />
      </div>
    );
  };

  return (
    <div className="h-full w-full">
      <div className='w-inherit flex justify-center block md:hidden'>
        <p className='text-5xl'>Automind System</p>
      </div>
      {getBrain('sm', 'block md:hidden')}
      {getBrain('md', 'hidden md:block lg:hidden')}
      {getBrain('lg', 'hidden lg:block xl:hidden')}
      {getBrain('xl', 'hidden xl:block')}
      <LearnMore />
      <Signup />
    </div>
  );
}
