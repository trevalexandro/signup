import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";
import { id as learnMoreId } from './learn-more';
import { id as signupId } from './signup';


const SplashButtons = ():JSX.Element => {
    return (
        <div className="flex flex-col md:flex-row md:items-center">
            <Button variant='secondary' className="mb-5 md:mb-10 animate-pulse">
                <Link href={`#${learnMoreId}`}>
                    Learn more about Automind System
                </Link>
            </Button>
            <Button className="bg-cyan-600 text-white mb-5 md:mb-10 md:ml-5 animate-pulse">
                <Link className='flex items-center' href={`#${signupId}`}>
                    Signup for early product launch
                <Rocket className='ml-1' />
                </Link>
            </Button>
        </div>
    );
};

export default SplashButtons;
