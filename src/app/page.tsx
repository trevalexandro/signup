'use client';

import Brain from '@/app/three-js-brain-animation';
import LearnMore from "./components/learn-more";
import Signup from './components/signup';
import SplashButtons from './components/splash-buttons';

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
        <div className='hidden md:block xl:hidden'>
          <SplashButtons />
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
