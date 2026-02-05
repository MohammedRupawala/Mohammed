import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mohammed",
  lastName: "Rupawala",
  name: `Mohammed Rupawala`,
  role: "Software Engineer",
  avatar: "/images/image.png",
  email: "mohammedrupawala.in@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MohammedRupawala",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mohammed-rupawala11",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  {
    name: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/MohammedRupawala",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name:"resume",
    icon:"document",
    link:"/MohammedRupawala.pdf",
    essential:true,
  }
];

const home: Home = {
  path: "/",
  image: "/images/image.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineering creativity through code and design</>,
  // featured: {
  //   display: true,
  //   title: "Check out my new project: Magic Portfolio!",
  //   href: "/work/magic-portfolio",
  // },
  subline: (
    <>
      I'm Mohammed, a passionate <Text as="span" size="xl" weight="strong">Software Engineer</Text> building robust web apps and creative solutions. Let's connect and create something amazing!
    </>
  ),
};

const allSkills = [
 { name: "C++", icon: "cpp", url: "https://isocpp.org/" },
 { name: "Python", icon: "python", url: "https://www.python.org/" },
 { name: "Go", icon: "go", url: "https://go.dev/" },
 { name: "HTML/CSS", icon: "htmlcss", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
 { name: "JavaScript", icon: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
 { name: "Next.js", icon: "nextjs", url: "https://nextjs.org/" },
 { name: "SQL", icon: "sql", url: "https://www.mysql.com/" },
 { name: "Git", icon: "git", url: "https://git-scm.com/" },
 { name: "Docker", icon: "docker", url: "https://www.docker.com/" },
 { name: "React", icon: "react", url: "https://react.dev/" },
 { name: "Node.js", icon: "nodejs", url: "https://nodejs.org/" },
];
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       I’m a software engineer who loves building scalable, reliable systems from the ground up. 
       I enjoy designing robust architectures and turning complex problems into maintainable solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "E2M Solutions",
        timeframe: "January 2026 - Present",
        role: "AI Engineering Intern",
        achievements: [
          <>
            Designed and launched a multi-tenant SaaS AI chatbot platform used by 20+ client organizations, enabling
            plug-and-play knowledge base ingestion (PDFs, docs, URLs).
          </>,
          <>
            Built end-to-end ingestion and retrieval pipelines using embeddings and semantic search, reducing client
            support workload by 40-60% and improving response accuracy across domains
          </>,
          <>
            Integrated APIs and workflow orchestration to automate business processes.
          </>
        ],
        images: [
        ],
      },
      // {
      //   company: "IIT Indore - Remote",
      //   timeframe: "July 2025 - December 2025",
      //   role: "SDE Intern",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple platforms, improving
      //       design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line, contributing to a 15% increase
      //       in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Adani University",
        description: <>B.Tech Information And Communication Technology.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title : "",
        tags: allSkills,
      }
      // Add more skills as needed, following the same structure
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export const competitiveProgramming = {
  display: true,
  title: "Competitive Programming",
  platforms: [
    {
      name: "LeetCode",
      url: "https://leetcode.com/THFC/",
      icon: "leetcode",
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/Special_One",
      icon: "codeforces",
    },
  ],
};


export const resume = {
  display: true,
  title: "Resume",
  href: "/resume.pdf", // Place your resume PDF in the public folder or update this path
};

export { person, social, newsletter, home, about, blog, work };


