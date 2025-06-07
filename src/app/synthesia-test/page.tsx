import IFrameRenderer from "../components/iframe-renderer";


const SynthesiaTest = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Synthesia Test Page</h1>
      <p className="text-lg">This is a test page for Synthesia integration.</p>
      <IFrameRenderer />
    </div>
  );
};

export default SynthesiaTest;