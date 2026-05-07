import SincLogo from "@/assets/sinc-logo.png"
import ConsumatechLogo from "@/assets/consumatech-logo.png"
import AndelaLogo from "@/assets/andela-logo.png"
import CodeofAfricaLogo from "@/assets/codeofafrica-logo.png"

export const experience = [
  {
    company: 'Code of Africa',
    position: 'Full-stack Engineer',
    duration: 'JULY 2024 - PRESENT',
    location: 'Kigali, Rwanda - Onsite',
    responsibilities: [
      'Partnered with product owners, QA, and distributed teams to refine requirements, support testing, and ensure high-quality releases across energy and automotive platforms.',
      'Delivered end-to-end features using Java and React on a regulatory platform for Austria’s electricity and gas market, enabling comparison of energy offers.',
      'Delivered end-to-end features using Java and Dojo on an automotive project, enabling vehicle part configuration, model customization, and localized assembly workflows across international markets.',
      'Contributed to migrating a legacy Dojo frontend to ReactTs, improving maintainability, performance, and UI.',
    ],
    url: 'https://www.codeofafrica.com/',
    logo: CodeofAfricaLogo
  },
  {
    company: 'Consumatech',
    position: 'Full-stack Engineer',
    duration: 'JAN 2024 - JULY 2024',
    location: 'Pretoria, South Africa - Remote',
    responsibilities: [
      'Developed and maintained full-stack features for a platform enabling South African students to launch small online businesses, using Next.js and NestJS.',
      'Built and maintained multiple white-label templates, ensuring consistency across 9 business flows and improving scalability through reusable components.',
      ' Worked closely with QA and product teams to validate features, track bugs, and ensure consistent behavior across all website templates.',
      'Introduced Jest unit tests across templates, improving reliability and reducing regressions.'
    ],
    url: 'https://consumatech.com/',
    logo: ConsumatechLogo
  },
  {
    company: 'Sinc today',
    position: 'Frontend Engineer',
    duration: 'MAY 2023 - JULY 2024',
    location: 'Kigali, Rwanda - Remote',
    responsibilities: [      'Developed key frontend features for an event management platform, including the organizer dashboard and event discovery website, using Next.js, TypeScript, and TailwindCSS.',
      'Partnered with the backend team to define API interactions and ensure efficient data flow, while delivering responsive and user-friendly interfaces.',
      'Contributed to improving UX through research and implementation, ensuring consistent and high-quality frontend experiences.',

    ],
    url: 'https://sinc.today/',
    logo: SincLogo
  },
  {
    company: 'Andela Technical Leadership Program',
    position: 'Full-stack Apprentice',
    duration: 'NOV 2022 - SEPT 2023',
    location: 'Kigali, Rwanda - Remote',
    responsibilities: [
      'Built full-stack applications using React, Express, and PostgreSQL as part of structured training and team projects.',
      'Developed an e-commerce platform in a team environment, participating in code reviews, rotating leadership roles, and implementing basic testing practices.',
      'Presented weekly demos and participated in Agile ceremonies, strengthening collaboration and communication skills.',
    ],
    url: 'https://www.andela.com/',
    logo: AndelaLogo
  },
];

export const projects = [
   {
    name: 'Sinc',
    imageSrc:
      'https://res.cloudinary.com/dagurahkl/image/upload/v1778152288/344b8e95-6f99-48a6-923a-7cadf32f930e.png',
    link: 'https://www.sinc.today/',
    description: 'A platform that makes managing events and selling tickets as seamless as possible',
    technologies: [
      'NextJs',
      'Tailwind',
      // 'Ant Design',
      // 'Framer motion',
      'Redux Toolkit',
    ],
  },
  {
    name: 'SokoFund',
    imageSrc:
      'https://res.cloudinary.com/dagurahkl/image/upload/v1778151218/Screenshot_2026-05-07_125154_ffxk0d.png',
    link: 'https://www.sokofund.com/',
    description: "An HR-FinTech Platform for African Businesses & Workforces",
    technologies: [
      'ReactJs',
      'Material UI',
      // 'Antd',
      'Apollo Client',
      // 'Redux Toolkit',
    ],
  },
  {
    name: 'Hubfly Space',
    imageSrc:
      'https://res.cloudinary.com/dagurahkl/image/upload/v1778151565/Screenshot_2026-05-07_125854_mggtib.png',
    link: 'https://hubfly.space/',
    description: "A cloud platform that allows users to easily deploy applications with full control and security",
    technologies: [
      'ReactJs',
      'Material UI',
      // 'Antd',
      'Apollo Client',
      // 'Redux Toolkit',
    ],
  },
  {
    name: 'Voxella',
    imageSrc:
      'https://res.cloudinary.com/dagurahkl/image/upload/v1778152593/e4ae4194-e60f-4d40-b506-6c4c54e9e6d5.png',
    link: 'https://www.voxella.app/',
    description: "Product feedback infrastructure for transparent decisions and faster delivery.",
    technologies: [
      'ReactJs',
      'Tailwind Css',
      // 'Antd',
      'Express Js',
      // 'Redux Toolkit',
    ],
  },
  {
    name: 'Izimart',
    imageSrc:
      'https://res.cloudinary.com/dagurahkl/image/upload/v1709980616/Screenshot_2024-03-07_112352_n4sohl.png',
    link: 'https://near-pick.vercel.app/',
    description: 'E-commerce platform for seamless shopping',
    technologies: [
      'NextJs',
      'Express Js',
      // 'Tailwind',
      // 'Framer motion',
      'PostgreSQL',
      // 'Redux Toolkit',
    ],
  },
  {
    name: 'Portfolio',
    imageSrc:
      'https://res.cloudinary.com/dagurahkl/image/upload/v1778151393/Screenshot_2026-05-07_125624_xcb30i.png',
    link: 'https://fabrand.vercel.app/',
    description: 'My personal website portfolio it is public',
    github: 'https://github.com/fabmukunzi/portfolio',
    technologies: [
      'NextJs',
      'Tailwind',
      // 'NextUI',
      'Framer motion',
    ],
  },
];
