import { ChartNoAxesCombined, ShoppingCart } from "lucide-react";
import { JSX } from "react";
import Image from "next/image";
import logo from "./../../../public/logo.png";

export const id = 'learn-more';

const LearnMore = ():JSX.Element => {
    return (
        <div id={id} className="mt-50 flex flex-col w-full">
            <div className="flex items-center">
                <ShoppingCart stroke="oklch(60.9% 0.126 221.723)" size={300} />
                <p className="text-3xl">Subscribe to AI products seamlessly<br /> with our e-commerce experience</p>
            </div>
            <div className="flex justify-end items-center mt-50">
                <p className="text-3xl">Integrate any of our solutions<br /> with your marketing strategies according<br /> to your use case</p>
                <ChartNoAxesCombined stroke="oklch(60.9% 0.126 221.723)" size={300} />
            </div>
        </div>
    );
};

export default LearnMore;