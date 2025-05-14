'use client';

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { JSX, useState } from "react";
import Link from "next/link";
import { id as learnMoreId } from './learn-more';
import { id as signupId } from './signup';

interface CollapsibleMenuProps {
    openChange: (open: boolean) => void;
};

const CollapsibleMenu = ({ openChange: openChange }:CollapsibleMenuProps):JSX.Element => {
    const [collapsibleOpen, setCollapsibleOpen] = useState(false);
    
    const onOpenChange = (open: boolean):void => {
        if (open !== collapsibleOpen) {
            setCollapsibleOpen(open);
            openChange(open);
        }
    };

    return (
    <Collapsible open={collapsibleOpen} onOpenChange={onOpenChange}>
        <CollapsibleTrigger asChild>
            <Button variant='ghost' className="mt-2" onClick={() => onOpenChange(true)}>
                <Menu /> 
            </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
            <div>
                <Button variant='link'>
                    <Link href={`#${signupId}`}>
                        Signup for early product launch
                    </Link>
                </Button>
                <Button variant='link'>
                    <Link href={`#${learnMoreId}`}>
                        Learn more about Automind System
                    </Link>
                </Button>
            </div>
        </CollapsibleContent>
    </Collapsible>
    );
};

export default CollapsibleMenu;
