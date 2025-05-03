import { Cloud, Laptop, Workflow } from "lucide-react";
import { JSX } from "react";

export const id = 'learn-more';

const LearnMore = ():JSX.Element => {
    return (
        <div id={id} className="mt-50 flex flex-col w-full">
            <div className="flex items-center">
                <Laptop stroke="oklch(60.9% 0.126 221.723)" size={300} />
                <div className="flex flex-col ml-5">
                    <p className="text-3xl">Customized Solutions</p>
                    <br />
                    <p className="text-xl text-gray-400">
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
                    <p className="text-3xl">Scalable Infrastructure</p>
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
                    <p className="text-3xl">Seamless Integration</p>
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