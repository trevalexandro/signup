import Image from "next/image";
import logo from "./../../public/logo.png";
import Brain from '@/app/three-js-brain-animation';

export default function Home() {
  return (
    <div className="h-full w-full">
      <Brain />
      <Image src={logo} alt='Automind Systems Logo' />
    </div>
  );
}
