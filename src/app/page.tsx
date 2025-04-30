import Brain from '@/app/three-js-brain-animation';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LearnMore, { id } from "./components/learn-more";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Brain />
        <div className="absolute top-0 mt-170 ml-170">
          {/* TODO: Embed button in the Three.js animation */}
          <Button className="bg-cyan-600 text-white mb-10 animate-pulse">
            <Link href={`#${id}`}>
              Automind Systems
            </Link>
          </Button>
        </div>
      <LearnMore />
    </div>
  );
}
