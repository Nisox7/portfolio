import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type educationType = {
  career: string;
  years: string;
  description: string;
};

export type iconType = { name: string; icon: JSX.Element };

export type TechnologyType = iconType;

export type ProjectType = {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  technologies: TechnologyType[];
  description: string;
  imgUrl: string;
  videoUrl: string;
  githubUrl: string;
  websiteUrl: string;
};

export type contactDataType = {
  email: string;
  github: string;
  linkedIn: string;
};
