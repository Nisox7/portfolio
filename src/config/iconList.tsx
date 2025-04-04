import { iconType } from "@/types";
import { SiAmazonwebservices, SiDocker, SiFlask, SiGit, SiGithub, SiJavascript, SiNextui, SiPython, SiReact, SiSqlalchemy, SiTailwindcss, SiTypescript } from "react-icons/si";

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
  {
    name: "JavaScript",
    icon: (
      <SiJavascript
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "React",
    icon: (
      <SiReact
        color={color}
        size={35}
      />
    ),
  },

  {
    name: "Tailwind CSS",
    icon: (
      <SiTailwindcss
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "HeroUI",
    icon: (
      <SiNextui
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Python",
    icon: (
      <SiPython
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Flask",
    icon: (
      <SiFlask
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "SQLAlchemy",
    icon: (
      <SiSqlalchemy
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Docker",
    icon: (
      <SiDocker
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Git",
    icon: (
      <SiGit
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Github",
    icon: (
      <SiGithub
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "AWS",
    icon: (
      <SiAmazonwebservices
        color={color}
        size={35}
      />
    ),
  },
];
