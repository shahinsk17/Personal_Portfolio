import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ` I am an enthusiastic frontend developer excited about creating visually appealing and user-friendly web applications. With a solid foundation in React, BootStrap, Tailwind CSS, Node.js, SQL databases, I enjoy bringing ideas to life and transforming them into engaging digital experience
s.
I am a hard working and passionate individual with strong leadership and teamwork capabilities 


As a student , I am eager to learn and grow in the ever-evolving field of frontend development. I am passionate about staying updated with the latest trends and technologies, and I actively seek opportunities to enhance my skills. I thrive in collaborative environments, where I can work with diverse teams to brainstorm ideas and develop innovative solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer and an undergraduate student with a passion for crafting efficient and user-friendly web applications. Throughout my academic journey, I have worked on various projects using technologies such as React, HTML5, and Tailwind CSS to enhance my skills. My interest in web development began with a deep curiosity about how things work and has evolved into a commitment to continuous learning and tackling new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Academically, I have excelled in my studies, and outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;

export const EDUCATION = [
  {
    year: "Jul 2021 - Jun 2025",
    education: "Bachelor of Engineering (B.E) in Information Technology",
    institution: "Dr. D.Y. Patil Institute of Technology, Pimpri",
    description: `Currently pursuing a B.E in Information Technology with an overall CGPA of 8.84/10.0.`,
  },
  {
    year: "Jun 2020",
    education: "Higher Secondary Certificate (HSC)",
    institution: "Modern Junior College, Nigdi Pune",
    description: `Completed HSC with a percentage of 89.60%.`,
  },
  {
    year: "Jun 2018",
    education: "Secondary School Certificate (SSC)",
    institution: "PCMC Urdu High School, Akurdi",
    description: `Completed SSC with an overall percentage of 89.00%.`,
  },
];



export const PROJECTS = [
  {
    title: "CommunityCare Connect",
    image: project1,
    description:
      " Built CommunityCare Connect, an impactful donation platform designed to unite volunteers and supporters in a shared mission. Integrated Razorpay for secure, hassle-free payments, and crafted a streamlined UI with interactive forms for personalized user engagement. The platform simplifies the donation process while fostering a community-driven impact through volunteering.",
    technologies: ["Node.js","Express.js","Payment gateway Integration-Razorpay", "CSS", "React",],
  },

  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Developed a dynamic, responsive portfolio website using React to highlight personal projects, skills, and educatio. This portfolio features a smooth, user-friendly interface with interactive elements, including a project showcase section, skill visualization, and a contact form for direct inquiries. Integrated React Router for seamless navigation, and optimized the application for performance and cross-device compatibility.",
    technologies: ["React"," React Router","tailwindCSS"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
