import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Bebas_Neue } from "next/font/google";

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export default function NavBar() {
  return (
    <div className="flex w-full flex-col py-[2vh] px-[4vw]">
      <div className="flex flex-col items-start -ml-4 lg:items-center lg:flex-row">
        <Button
          className="text-slate-500 font-normal"
          fontSize={"xl"}
          variant={"link"}
        >
          &quot;Se apresente&quot;
        </Button>
        <Button
          className="text-slate-500 font-normal"
          fontSize={"xl"}
          variant={"link"}
        >
          &quot;me fale um pouco sobre você&quot;
        </Button>
        <Button
          className="text-slate-500 font-normal"
          fontSize={"xl"}
          variant={"link"}
        >
          &quot;e os projetinhos?&quot;
        </Button>
      </div>
      <div className="flex items-center space-x-8 whitespace-nowrap">
        <h1
          className={cn(
            "text-justify pointer-events-none select-none text-[11vw] scale-y-[2] mt-12",
            bebas.className
          )}
        >
          Lorenzo Michelotti
        </h1>
      </div>

      <span className="sr-only">Lorenzo Michelotti</span>
      <div className="flex flex-col w-full justify-between">
        <div className="flex-col flex lg:flex-row lg:items-center">
          <div className="ml-2 flex flex-col">
            <div className=" flex items-center">
              <div className=" bg-yellow-500 w-4 aspect-square rounded-full"></div>
              <span className="ml-1 text-lg lg:text-xl">
                Graduando em Engenharia de Software,
              </span>
            </div>
            <span className="text">
              atualmente trabalhando com a equipe de TI do ecommerce na{" "}
              <a
                href="https://www.linkedin.com/in/havanlabs/"
                className="font-semibold hover:underline"
              >
                @Havan
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
