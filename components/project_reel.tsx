import { cn } from "@/lib/utils";
import { Bebas_Neue } from "next/font/google";

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export default function ProjectReel() {
  return (
    <div
      className={cn(
        "bg-black h-[42vh] w-screen m-0 grid grid-cols-3 gap-[0.1rem] py-[0.1rem]",
        bebas.className
      )}
    >
      <div className="bg-white overflow-clip relative w-full h-full">
        <div className="font-black text-[8rem] absolute -rotate-12 top-1/2 -left-8 -translate-y-1/2 whitespace-nowrap">
          EM DESENVOLVIMENTO
        </div>
      </div>
      <div className="bg-white overflow-clip relative w-full h-full">
        <div className="font-black text-[8rem] absolute -rotate-12 top-1/2 -left-8 -translate-y-1/2 whitespace-nowrap">
          EM DESENVOLVIMENTO
        </div>
      </div>
      <div className="bg-white overflow-clip relative w-full h-full">
        <div className="font-black text-[8rem] absolute -rotate-12 top-1/2 -left-8 -translate-y-1/2 whitespace-nowrap">
          EM DESENVOLVIMENTO
        </div>
      </div>
    </div>
  );
}
