
interface SynthesiaThumbnail {
    gif: string;
    image: string;
}

interface SynthesiaResponse {
    download: string;
    duration: string;
    id: string;
    status: string;
    thumbnail: SynthesiaThumbnail;
    title: string;
    visibility: string;
};


export const getVideoContent = async ():Promise<SynthesiaResponse> => {
    console.log(process.env.SYNTHESIA_API_KEY);
    const response = await fetch('https://api.synthesia.io/v2/videos/34888ec7-8bb2-4132-8958-a6b5f9584a52', {
        method: 'GET',
        headers: {
            'Authorization': `${process.env.SYNTHESIA_API_KEY}`,
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        console.error('Error fetching video content: ', response.statusText);
        throw new Error(`Error fetching video content: ${response.statusText}`);
    }

    return (await response.json()) as SynthesiaResponse;
};
