import { Cloud, Laptop, Workflow } from "lucide-react";
import { JSX } from "react";

export const id = 'learn-more';

interface LearnMoreProps {
    screenSize?: string;
};

const LearnMore = ({ screenSize }:LearnMoreProps):JSX.Element => {
    return (
        <div id={id} className="mt-50 flex flex-col w-full">
            <div className="flex flex-col md:flex-row items-center">
                <Laptop className="inline-block md:hidden" stroke="oklch(60.9% 0.126 221.723)" size={200} />
                <Laptop className="hidden md:inline-block" stroke="oklch(60.9% 0.126 221.723)" size={300} />
                <div className="flex flex-col items-center md:items-start ml-0 md:ml-5">
                    <p className="text-3xl md:text-5xl">Game-Changing Solutions</p>
                    <br />
                    <p className="text-xl text-gray-400 block ml-5 md:hidden">
                        We partner with you to understand your business challenges and help you make data-driven decisions 
                        and develop customized solutions to address your specific business needs.
                    </p>
                    <p className="text-xl text-gray-400 hidden md:block">
                        We partner with you to understand your business<br />
                        challenges and help you make data-driven decisions<br /> 
                        and develop customized solutions to address your<br /> 
                        specific business needs.
                    </p>
                </div>
            </div>
            <div className="flex justify-end items-center mt-50">
                <Cloud stroke="oklch(60.9% 0.126 221.723)" size={300} />
                <div className="flex flex-col ml-5">
                    <p className="text-5xl">Scalable Infrastructure</p>
                    <br />
                    <p className="text-xl text-gray-400">
                        Our operating platform with customers is constantly scaling<br /> 
                        our team and infrastructure. We have the capabilities to<br />
                        process and analyze large amounts of data using cloud<br /> 
                        computing and big data technologies.
                    </p>
                </div>
            </div>
            <div className="flex items-center mt-50">
                <Workflow stroke="oklch(60.9% 0.126 221.723)" size={300} />
                <div className="flex flex-col ml-5">
                    <p className="text-5xl">Seamless Integration</p>
                    <br />
                    <p className="text-xl text-gray-400">
                        Our platform seamlessly integrates AI with your existing<br />
                        systems and processes, allowing you to easily<br /> 
                        visualize, analyze, and make sense of your data<br /> 
                        without disrupting your workflows.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;