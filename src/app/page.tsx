import Brain from '@/app/three-js-brain-animation';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LearnMore, { id } from "./components/learn-more";
import { Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="h-full w-full">
      <Brain />
      <LearnMore />
    </div>
  );
}
