import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex mt-auto space-x-4 items-center w-full justify-center py-[4vh]">
      <span>Lorenzo Michelotti</span>
      <a
        className="flex space-x-2 hover:underline"
        href="https://www.linkedin.com/in/lorenzo-michelotti-b1b4441a7/"
      >
        <Linkedin className="-mt-[0.15rem]"></Linkedin>
        <span>Linkedin</span>
      </a>
      <a
        className="flex space-x-2 hover:underline"
        href="https://github.com/LorenzoMichelotti"
      >
        {" "}
        <Github className="-mt-[0.15rem]"></Github>
        <span>Github</span>
      </a>
    </footer>
  );
}
