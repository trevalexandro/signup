import { ShoppingCart } from "lucide-react";
import { JSX } from "react";
import Image from "next/image";
import logo from "./../../../public/logo.png";

export const id = 'learn-more';

const LearnMore = ():JSX.Element => {
    return (
        <div id={id} className="mt-50 flex flex-col w-full">
            <div className="flex justify-center">
                <Image src={logo} alt='Automind Systems Logo' />
            </div>
            <div className="flex items-center">
                <ShoppingCart size={300} />
                <p className="text-3xl">Integrate AI products seamlessly with our e-commerce experience.</p>
            </div>
        </div>
    );
};

export default LearnMore;