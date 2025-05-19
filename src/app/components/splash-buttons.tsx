import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";
import { id as learnMoreId } from './learn-more';
import { id as signupId } from './signup';


const SplashButtons = ():JSX.Element => {
    return (
        <div className="flex flex-col md:flex-row max-md:items-center md:max-xl:justify-center md:max-xl:w-full md:space-x-10 md:max-xl:mt-10">
          <Button variant='secondary' className="animate-pulse">
            <Link href={`#${learnMoreId}`}>
              Learn more about Automind System
            </Link>
          </Button>
          <Button className="bg-automind-red text-white animate-pulse">
            <Link className='flex items-center' href={`#${signupId}`}>
              Signup for early product launch
              <Rocket className='ml-1' />
            </Link>
          </Button>
        </div>
    );
};

export default SplashButtons;
