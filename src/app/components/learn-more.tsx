import { Cloud, Laptop, Workflow } from "lucide-react";
import { JSX } from "react";

export const id = 'learn-more';

const LearnMore = ():JSX.Element => {
    const ICON_STROKE_COLOR = 'oklch(0.5594 0.1978 25.66)';

    return (
        <div id={id} className="mt-50 flex flex-col w-full">
            <div className="flex flex-col md:flex-row items-center">
                <Laptop className="inline-block md:hidden" stroke={ICON_STROKE_COLOR} size={200} />
                <Laptop className="hidden md:inline-block" stroke={ICON_STROKE_COLOR} size={300} />
                <div className="flex flex-col items-center md:items-start ml-0 md:ml-5">
                    <p className="text-3xl md:text-4xl lg:text-5xl">Game-Changing Solutions</p>
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
            <div className="flex flex-col md:flex-row md:justify-end items-center mt-25 md:mt-50">
                <Cloud className="inline-block md:hidden" stroke={ICON_STROKE_COLOR} size={200} />
                <Cloud className="hidden md:inline-block" stroke={ICON_STROKE_COLOR} size={300} />
                <div className="flex flex-col items-center md:items-start ml-0 md:ml-5">
                    <p className="text-3xl md:text-4xl lg:text-5xl">Scalable Infrastructure</p>
                    <br />
                    <p className="text-xl text-gray-400 block ml-5 md:hidden">
                        Our operating platform with customers is constantly scaling our team and infrastructure. We have the 
                        capabilities to process and analyze large amounts of data using cloud computing and big data technologies.
                    </p>
                    <p className="text-xl text-gray-400 block hidden md:block lg:hidden">
                        Our operating platform with customers is constantly<br />
                        scaling our team and infrastructure. We have the<br /> 
                        capabilities to process and analyze large amounts of<br />
                        data using cloud computing and big data technologies.
                    </p>
                    <p className="text-xl text-gray-400 hidden lg:block">
                        Our operating platform with customers is constantly scaling<br /> 
                        our team and infrastructure. We have the capabilities to<br />
                        process and analyze large amounts of data using cloud<br /> 
                        computing and big data technologies.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-25 md:mt-50">
                <Workflow className="inline-block md:hidden" stroke={ICON_STROKE_COLOR} size={200} />
                <Workflow className="hidden md:inline-block" stroke={ICON_STROKE_COLOR} size={300} />
                <div className="flex flex-col items-center md:items-start ml-0 md:ml-5">
                    <p className="text-3xl md:text-4xl lg:text-5xl">Seamless Integration</p>
                    <br />
                    <p className="text-xl text-gray-400 block md:hidden">
                        Our platform seamlessly integrates AI with your existing systems and processes, allowing you to easily 
                        visualize, analyze, and make sense of your data without disrupting your workflows.
                    </p>
                    <p className="text-xl text-gray-400 hidden md:block lg:hidden">
                        Our platform seamlessly integrates AI with your<br />
                        existing systems and processes, allowing you to<br />
                        easily visualize, analyze, and make sense of your<br />
                        data without disrupting your workflows.
                    </p>
                    <p className="text-xl text-gray-400 hidden lg:block">
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
