import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import { JSX } from "react";


const DrawerMenu = ():JSX.Element => {
    return (
        <Drawer>
            <DrawerTrigger>
                <Button variant='ghost'>
                    <Menu /> 
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="flex justify-end">
                    <X />
                </DrawerHeader>
                <Button variant='link'>Learn More</Button>
                <Button variant='link'>Sign up for early product launch</Button>
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerMenu;