'use server';

import { JSX } from "react";
import { getVideoContent } from "../services/iframe-service";


const IFrameRenderer = async ():Promise<JSX.Element> => {
    const videoContent = await getVideoContent();
    
    return (
        <iframe src={videoContent.download} className="w-full! h-full!" allowFullScreen />
    );
};

export default IFrameRenderer;