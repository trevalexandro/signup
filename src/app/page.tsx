import Image from "next/image";
import logo from "./../../public/logo.png";

export default function Home() {
  return (
    <div>
      <Image src={logo} alt="Logo for Automind Systems" />
    </div>
  );
}
