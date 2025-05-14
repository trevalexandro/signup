import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX } from "react";
import { id as learnMoreId } from './learn-more';
import { id as signupId } from './signup';
import { Menu } from "lucide-react";


const MobileMenu = ():JSX.Element => {
    return (
        <Accordion className="w-full justify-center" type="single" collapsible>
            <AccordionItem value="menu">
                <AccordionTrigger className="flex justify-around items-center">
                    <Menu className="invisible" />
                    <p className='text-3xl '>Automind System</p>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="w-full flex flex-col items-end">
                        <Button variant='link'>
                            <Link href={`#${signupId}`}>
                                Sign up for early product launch
                            </Link>
                        </Button>
                        <Button variant='link'>
                            <Link href={`#${learnMoreId}`}>
                                Learn more about Automind System
                            </Link>
                        </Button>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default MobileMenu;