// Mock portfolio content. Replace with real details; components read only from here.

export type Profile = {
  name: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  summary: string;
  bio: string;
  avatar: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Short text for the card. */
  description: string;
  /** Badge shown in the detail view. */
  category?: string;
  /** Longer write-up for the detail view; falls back to description. */
  overview?: string;
  features?: string[];
  tags: string[];
  /** Paths under public/; first entry is the primary image. */
  images?: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Contact = {
  icon: "email" | "github" | "instagram" | "facebook";
  label: string;
  href: string;
  handle: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const profile: Profile = {
  name: "Thanakorn Nilphinij",
  role: "Embedded Systems Engineer",
  headline: "Thanakorn Nilphinij",
  location: "Bangkok, Thailand",
  email: "thanakornjah2547@gmail.com",
  summary:
    "Computer Engineering Technology student building reliable hardware and web applications.",
  bio: "I am a Computer Engineering Technology student at KMUTNB with a passion for bridging hardware systems and modern web development. My experience ranges from building responsive React web applications to designing microcontroller-based circuits with C++ and Arduino. I enjoy solving complex problems and creating practical, user-centric applications from circuit board to web interface.",
  avatar: "/images/avatar.jpg",
};

export const projects: Project[] = [
  {
    slug: "everton-fan-hub",
    title: "Everton Fan Hub",
    description:
      "A fan dashboard for Everton F.C. with a live derby countdown, fixtures, an interactive squad grid, a fan zone and a store with a working basket.",
    category: "Web App",
    features: [
      "Live derby countdown",
      "Fixtures list",
      "Interactive squad grid",
      "Fan zone",
      "Store with a working basket",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "Lucide"],
    repoUrl: "https://github.com/Thanakorn191/mobileApp",
    featured: true,
  },
  {
    slug: "courthub-web",
    title: "CourtHub Web",
    description:
      "A comprehensive sports facility and court booking web application developed collaboratively as a team project. Features court discovery, real-time availability checking, automated slot booking, and user management.",
    category: "Web App · Team Project",
    features: [
      "Court discovery",
      "Real-time availability checking",
      "Automated slot booking",
      "User management",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Team Project", "Full-Stack"],
    images: ["/images/projects/courthub-1.jpg"],
    repoUrl: "https://github.com/Chinnawan/courthub-web",
    featured: true,
  },
  {
    slug: "arduino-calculator",
    title: "Arduino Microcontroller Calculator",
    description:
      "A hardware-based calculator built using Arduino Uno, 4x4 matrix keypad, and 16x2 LCD display. It processes user inputs via matrix scanning, executes arithmetic logic in C++, and outputs results in real-time. Includes complete hardware wiring and Fritzing schematic design.",
    category: "Embedded Systems",
    features: [
      "4x4 matrix keypad input via matrix scanning",
      "Arithmetic logic written in C++",
      "Real-time results on a 16x2 LCD",
      "Complete hardware wiring and Fritzing schematic",
    ],
    tags: ["Arduino", "C++", "Embedded Systems", "Microcontroller", "Circuit Design"],
    images: [
      "/images/projects/arduino-calculator-1.jpg",
      "/images/projects/arduino-calculator-2.jpg",
    ],
    featured: true,
  },
  {
    slug: "dc-power-supply",
    title: "Adjustable Linear DC Power Supply",
    description:
      "Designed and built a custom regulated linear DC power supply unit. Features a step-down transformer, AC-to-DC bridge rectification, high-capacitance filtering, voltage regulators (fixed and adjustable outputs), overload fuse protection, and clean panel wiring within a custom metal enclosure.",
    category: "Power Electronics",
    features: [
      "Step-down transformer",
      "AC-to-DC bridge rectification",
      "High-capacitance filtering",
      "Fixed and adjustable voltage regulators",
      "Overload fuse protection",
      "Clean panel wiring in a custom metal enclosure",
    ],
    tags: [
      "Power Electronics",
      "Analog Circuits",
      "PCB Design",
      "Hardware Engineering",
      "Electrical Wiring",
    ],
    images: [
      "/images/projects/dc-power-supply-1.jpg",
      "/images/projects/dc-power-supply-2.jpg",
    ],
    featured: true,
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Software & Web",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML", "Python", "Java", "PHP", "Git", "REST APIs"],
  },
  {
    category: "Hardware & Systems",
    items: ["Arduino", "C/C++", "Microcontrollers", "Circuit Design", "Embedded Logic"],
  },
];

export const contacts: Contact[] = [
  {
    icon: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    handle: profile.email,
  },
  {
    icon: "github",
    label: "GitHub",
    href: "https://github.com/Thanakorn191",
    handle: "@Thanakorn191",
  },
  {
    icon: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/jahfalsenine",
    handle: "@jahfalsenine",
  },
  {
    icon: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1DkZ6gfUJW/",
    handle: "Thanakorn Nilphinij",
  },
];
