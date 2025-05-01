import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="h-[200vh]"></div>
      </div>
    </main>
  );
}