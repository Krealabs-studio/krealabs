export interface Project {
  status: string;
  statusColor?: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export interface Social {
  handle: string;
  url: string;
}

export interface Partner {
  name: string;
  role: string;
  description: string;
  link: string;
  linkText: string;
  socials?: Social[];
}

export interface TeamMember {
  name: string;
  role: string;
  roleColor?: string;
  description: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export const PROJECTS: Project[] = [
  {
    status: "[ IN PROGRESS ]",
    statusColor: "text-krea-gray",
    title: "Markless Sports Analysis",
    description:
      "Computer vision-driven decision support system for sports analysis.",
    link: "#",
    linkText: "View Project ->",
  },
  {
    status: "[ Deployed ]",
    statusColor: "text-krea-red",
    title: "Yuelin Liu's Website",
    description: "Portfolio website for Yuelin Liu.",
    link: "https://www.liuyuelin.dev/",
    linkText: "View Website ->",
  },
  {
    status: "[ Deployed ]",
    statusColor: "text-krea-red",
    title: "Kelvin Choo's Website",
    description: "Portfolio website for Kelvin Choo.",
    link: "https://kelza23.github.io//",
    linkText: "View Website ->",
  },
];

export const PARTNERS: Partner[] = [
  {
    name: "Kreatif Minds",
    role: "Creative Strategy & Content",
    description:
      "Fueling the digital engine with high-octane visual storytelling and marketing strategy.",
    link: "https://kreatifminds.studio",
    linkText: "View Partner ->",
    socials: [
      {
        handle: "@kreatifminds.studio",
        url: "https://instagram.com/kreatifminds.studio",
      },
      {
        handle: "@kreatifminds.co",
        url: "https://instagram.com/kreatifminds.co",
      },
    ],
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Yuelin Liu",
    role: "Full Stack Developer",
    roleColor: "text-krea-red",
    description: "Architecting digital interfaces and seamless user protocols.",
  },
  {
    name: "Samuel Gan",
    role: "Computer Vision Engineer",
    roleColor: "text-krea-red",
    description:
      "Translating raw visual data into actionable machine intelligence.",
  },
  {
    name: "Fung Chan",
    role: "Graduate Engineer",
    roleColor: "text-krea-red",
    description: "Synthesizing physical hardware constraints with edge AI logic.",
  },
  {
    name: "Joanne Wong",
    role: "Data Scientist",
    roleColor: "text-krea-red",
    description: "Distilling clear signal from complex, unstructured data noise.",
  },
];

export const SOCIALS: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@krealabs.studio",
    url: "https://instagram.com/krealabs.studio",
  },
];
