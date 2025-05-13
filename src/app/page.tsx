'use client';

import Brain from '@/app/three-js-brain-animation';
import LearnMore from "./components/learn-more";
import Signup from './components/signup';
import SplashButtons from './components/splash-buttons';
import DrawerMenu from './components/drawer-menu';

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
      <div className='w-inherit flex flex-row justify-between md:flex-col items-center xl:hidden'>
        <div className='invisible md:hidden'>
          <DrawerMenu />
        </div>
        <p className='text-3xl md:text-5xl lg:text-7xl'>Automind System</p>
        <div className='md:hidden'>
          <DrawerMenu />
        </div>
        <div className='hidden md:block xl:hidden'>
          <SplashButtons />
        </div>
      </div>
      {getBrain('block xl:hidden')}
      {getBrain('hidden xl:block', 'xl')}
      <LearnMore />
      <Signup />
    </div>
  );
}
