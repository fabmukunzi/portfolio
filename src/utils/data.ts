import SincLogo from "@/assets/sinc-logo.png"
import ConsumatechLogo from "@/assets/consumatech-logo.png"
import AndelaLogo from "@/assets/andela-logo.png"
import CodeofAfricaLogo from "@/assets/codeofafrica-logo.png"

export const experience = [
  {
    company: 'Code of Africa',
    position: 'Full-stack Engineer',
    duration: 'OCT 2024 - PRESENT',
    location: 'Kigali, Rwanda - Onsite',
    responsibilities: [
      'Contributed to a regulatory platform for Austria’s electricity and gas market, enabling comparison of energy offers',
      'Contributed to an automotive project enabling vehicle part configuration and localized assembly workflows across markets',
      'Developed scalable applications using Java and React, improving performance and user experience',
      'Migrated a legacy application from Dojo to React TypeScript, improving maintainability and performance',
    ],
    url: 'https://www.codeofafrica.com/',
    logo: CodeofAfricaLogo
  },
  {
    company: 'Consumatech',
    position: 'Full-stack Engineer',
    duration: 'JAN 2024 - OCT 2024',
    location: 'Pretoria, South Africa - Remote',
    responsibilities: [
      'Fixed backend issues and optimized frontend performance, improving overall user experience',
      'Wrote unit tests to ensure reliable frontend functionality and stability',
      ' Standardized code across multiple website templates, improving maintainability',
    ],
    url: 'https://consumatech.com/',
    logo: ConsumatechLogo
  },
  {
    company: 'Sinc today',
    position: 'Frontend Engineer',
    duration: 'MAY 2023 - DEC 2024',
    location: 'Kigali, Rwanda - Remote',
    responsibilities: [
      'Collaborated on building an event management dashboard for organizers',
      'Developed an event discovery platform with booking capabilities',
      'Worked in a team environment to deliver modern, user-friendly applications',
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
      'Built full-stack applications using React, Express, and PostgreSQL',
      'Wrote unit and integration tests to ensure reliability',
      'Participated in technical presentations and collaborative team projects',
    ],
    url: 'https://www.andela.com/',
    logo: AndelaLogo
  },
];

export const projects = [
  {
    name: 'CreativeAminu',
    imageSrc:
      'https://res.cloudinary.com/dagurahkl/image/upload/v1717145472/wfstqyp0acfo7babryhb.png',
    // link: 'https://creativeaminu-git-ft-projects-page-kevin-ks-projects-19e8753e.vercel.app/',
    description: "Creative Aminu's Portfolio Website",
    technologies: [
      'NextJs',
      'Tailwind Css',
      // 'Antd',
      'Framer motion',
      // 'Redux Toolkit',
    ],
  },
  {
    name: 'Sinc | Dashboard',
    imageSrc:
      'https://res.cloudinary.com/dagurahkl/image/upload/v1719442942/Screenshot_2024-06-27_010050_xc1gey.png',
    link: 'https://organizer.sinc.today/',
    description: 'Dashboard for Event management platform',
    technologies: [
      'NextJs',
      'Tailwind',
      // 'Ant Design',
      // 'Framer motion',
      'Redux Toolkit',
    ],
  },
  {
    name: 'Izimart',
    imageSrc:
      'https://res.cloudinary.com/dagurahkl/image/upload/v1709980616/Screenshot_2024-03-07_112352_n4sohl.png',
    // link: 'https://izimart.com/',
    description: 'E-commerce platform for seamless shopping',
    technologies: [
      'NextJs',
      'Express Js',
      // 'Tailwind',
      // 'Framer motion',
      'Postgresql',
      // 'Redux Toolkit',
    ],
  },
  {
    name: 'Portfolio',
    imageSrc:
      'https://res.cloudinary.com/dagurahkl/image/upload/v1719443240/Screenshot_2024-06-27_010700_azfqkg.png',
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
