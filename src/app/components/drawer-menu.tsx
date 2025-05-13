'use client';

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { JSX, useState } from "react";
import { id as learnMoreId } from './learn-more';
import { id as signupId } from './signup';

const DrawerMenu = ():JSX.Element => {
    const [drawerOpened, setDrawerOpened] = useState(false);

    const onOpenChange = (open: boolean):void => {
        if (open !== drawerOpened) {
            setDrawerOpened(open);
        }
    };

    return (
        <Drawer open={drawerOpened} onOpenChange={onOpenChange} direction="top">
            <DrawerTrigger asChild>
                <Button variant='ghost' className="mt-2" onClick={() => onOpenChange(true)}>
                    <Menu /> 
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="w-full flex flex-row justify-end">
                    <DrawerTitle className="sr-only">Menu</DrawerTitle>
                    <DrawerDescription className="sr-only">Menu for sign up page</DrawerDescription>
                    <Button variant='ghost' onClick={() => onOpenChange(false)}>
                        <X />
                    </Button>
                </DrawerHeader>
                <div className="w-full flex flex-col items-start">
                    <Button variant='link'>
                        <Link href={`#${learnMoreId}`}>
                            Learn more about Automind System
                        </Link>
                    </Button>
                    <Button variant='link'>
                        <Link href={`#${signupId}`}>
                            Signup for early product launch
                        </Link>
                    </Button>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerMenu;
