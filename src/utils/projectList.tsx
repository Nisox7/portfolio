import { SiAmazonwebservices, SiBootstrap, SiCss3, SiDocker, SiFlask, SiHtml5, SiJavascript, SiNextui, SiReact, SiSqlalchemy, SiTailwindcss, SiTypescript } from "react-icons/si";
import { ProjectType } from "../types";
import { BiCloud } from "react-icons/bi";

export const ProjectList: ProjectType[] = [
  {
    icon: <SiNextui />,
    title: "CartaYa",
    subtitle: "Sistema de carta digital",
    technologies: [
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "HeroUI",
        icon: <SiNextui />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        name: "Flask",
        icon: <SiFlask />,
      },
      {
        name: "SQLAlchemy",
        icon: <SiSqlalchemy />,
      },
      {
        name: "Docker",
        icon: <SiDocker />,
      },
      {
        name: "AWS",
        icon: <SiAmazonwebservices />,
      },
    ],
    description:
      "Sistema de carta digital creado con HeroUI, Tailwind CSS, TypeScript, React, Flask, SQLAlchemy y Docker. Desplegado en AWS con backups en un bucket.",
    imgUrl: "/cartaya-portada.png",
    videoUrl: "",
    githubUrl: "https://github.com/cartaya-ar",
    websiteUrl: "https://cartaya.com.ar",
  },
  {
    icon: <SiNextui />,
    title: "LN Conexiones",
    subtitle: "Landing page para LN Conexiones | Proveedores de seguridad e internet",
    technologies: [
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "HeroUI",
        icon: <SiNextui />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        name: "Docker",
        icon: <SiDocker />,
      },
      {
        name: "AWS",
        icon: <SiAmazonwebservices />,
      },
    ],
    description:
      "Landing page para LN Conexiones | Proveedores de seguridad e internet.",
    imgUrl: "/ln-conexiones-dark.png",
    videoUrl: "",
    githubUrl: "",
    websiteUrl: "https://lnconexiones.com.ar",
  },
  {
    icon: <SiNextui />,
    title: "Shopping List",
    subtitle: "Lista de Compras para multiples usuarios",
    technologies: [
      {
        name: "HTML",
        icon: <SiHtml5 />,
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
      },
      {
        name: "Flask",
        icon: <SiFlask />,
      },
      {
        name: "SQLAlchemy",
        icon: <SiSqlalchemy />,
      },
      {
        name: "Docker",
        icon: <SiDocker />,
      },
      {
        name: "SelfHosted",
        icon: <BiCloud />,
      },
    ],
    description:
      "Lista de Compras para multiples usuarios",
    imgUrl: "/shopping-list.png",
    videoUrl: "",
    githubUrl: "https://github.com/Nisox7/shopping_list",
    websiteUrl: "https://shoppinglist.linea21.com.ar",
  },
  {
    icon: <SiNextui />,
    title: "Menú Hans",
    subtitle: "Carta digital con QR para local físico",
    technologies: [
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "HeroUI",
        icon: <SiNextui />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        name: "Flask",
        icon: <SiFlask />,
      },
      {
        name: "SQLAlchemy",
        icon: <SiSqlalchemy />,
      },
      {
        name: "Docker",
        icon: <SiDocker />,
      },
      {
        name: "Linode",
        icon: <BiCloud />,
      },
    ],
    description:
      "Carta digital con QR para local físico",
    imgUrl: "/menu-hans-completo.png",
    videoUrl: "",
    githubUrl: "",
    websiteUrl: "https://menuhans.com.ar",
  },
];