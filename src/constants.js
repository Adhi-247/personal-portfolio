// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';

import figmaL from './assets/tech_logo/figma1.png';

import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's (Certificate Providers)
import icbtLogo from './assets/company_logo/ICBT ICT.jpeg';
import rahulaLogo from './assets/company_logo/RAHULA color.jpeg';
import rcmLogo from './assets/company_logo/RCM.jpeg';
import simplilearnLogo from './assets/company_logo/simplilearn.png';
import slFootballLogo from './assets/company_logo/SL FOOTBALL.jpeg';
import slSchoolLogo from './assets/company_logo/SL SCHOOL color.jpeg';
import sliitColorLogo from './assets/company_logo/SLIIT color.jpeg';
import sliitLogoJpg from './assets/company_logo/sliit-logo.jpg';
import southernProvince17Logo from './assets/company_logo/southern_province 17.jpeg';
import southernProvince18Logo from './assets/company_logo/southern_province 18.jpeg';


// Education Section Logo's

import sliitLogo from './assets/education_logo/sliit.png';
import schoolLogo from './assets/education_logo/school_logo.jpg';

// Project Section Logo's
// Electrical Appliance Store Images
import electricalStore1 from './assets/work_logo/electrical_store_1.png';
import electricalStore2 from './assets/work_logo/electrical_store_2.png';
import electricalStore3 from './assets/work_logo/electrical_store_3.png';
import electricalStore4 from './assets/work_logo/electrical_store_4.png';

// Disaster Management Images
import disasterManagement1 from './assets/work_logo/disaster_management_1.png';
import disasterManagement2 from './assets/work_logo/disaster_management_2.png';
import disasterManagement3 from './assets/work_logo/disaster_management_3.png';
import disasterManagement4 from './assets/work_logo/disaster_management_4.png';

// Train Reservation Images
import trainReservation1 from './assets/work_logo/train_reservation_1.jpeg';
import trainReservation2 from './assets/work_logo/train_reservation_2.png';
import trainReservation3 from './assets/work_logo/train_reservation_1.jpeg';
import trainReservation4 from './assets/work_logo/train_reservation_2.png';

// Boat Safari Images
import boatSafari1 from './assets/work_logo/boat_safari_1.png';
import boatSafari2 from './assets/work_logo/boat_safari_2.png';
import boatSafari3 from './assets/work_logo/boat_safari_1.png';
import boatSafari4 from './assets/work_logo/boat_safari_2.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
   
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Figma', logo: figmaL },
    ],
  },
];

  export const experiences = [
    // Certificate 1: Southern Province School Games – Football (2017 & 2018) - AUTO ROTATING IMAGES
    {
      id: 0,
      images: [southernProvince17Logo, southernProvince18Logo], // Multiple images will auto-rotate
      role: "Southern Province School Games – Football",
      company: "Department of Education – Southern Province, Sri Lanka",
      date: "2017 & 2018",
      desc: "ADD YOUR DESCRIPTION HERE", // You can edit this
      skills: ["Champions", "Football", "Teamwork"], // You can edit this
      link: "https://www.linkedin.com/in/adeesha-prabashwara-549464386/" // Replace with your LinkedIn profile URL
    },
    
    // Certificate 2: School Sports Achievements & Leadership
    {
      id: 1,
      img: rcmLogo,
      role: "School Sports Achievements & Leadership",
      company: "Rahula College",
      date: "Sep 2022",
      desc: "Official recognition of my school football achievements and leadership, issued by the Principal of Rahula College, Matara.", // You can edit this
      skills: ["Student Discipline", "Leadership", "Education", "Sportsmanship"], // You can edit this
      link: "https://www.linkedin.com/in/adeesha-prabashwara-549464386/" // Replace with your LinkedIn profile URL
    },
    
    // Certificate 3: Colours Award Winner - AUTO ROTATING IMAGES
    {
      id: 2,
      images: [sliitColorLogo, rahulaLogo, slSchoolLogo], // Multiple images will auto-rotate
      role: "Colours & Merit Award - Football (Rahula College & SLIIT)",
      company: "SLIIT, Rahula College Matara",
      date: "2019-2024",
      desc: "ADD YOUR DESCRIPTION HERE", // You can edit this
      skills: ["Performance Excellence", "Team Leadership"], // You can edit this
      link: "https://www.linkedin.com/in/adeesha-prabashwara-549464386/" // Replace with your LinkedIn profile URL
    },
    
    // Certificate 5: Former Sri Lanka National Football Player
    {
      id: 4,
      img: slFootballLogo,
      role: "Sri Lanka Under 18 & 19 National Football Team - Asian Championships (2019/20)",
      company: "Kementerian Pemuda dan Olahraga RI (Ministry of Youth and Sports, Indonesia)",
      date: "2019-2020",
      desc: "Selected to represent Sri Lanka Under-18 and 19 National Football Team at the 47th Asian Football Championship 2019, held in Balikpapan, Indonesia. This tournament marked the highest level of my football career, competing internationally against Asian teams.", // You can edit this
      skills: ["National Team Representation", "International Football", "Competitive Sports"], // You can edit this
      link: "https://www.linkedin.com/in/adeesha-prabashwara-549464386/" // Replace with your LinkedIn profile URL
    },

    // Certificate 6: ICBT ICT Certificate
    {
      id: 5,
      img: icbtLogo,
      role: "Diploma in Information and Communication Technology (ICT)",
      company: "ICBT Campus",
      date: "2024",
      desc: "Diploma in Information & Communication Technology (Distinction) - ICBT Campus, 2024", // You can edit this
      skills: ["Information Technology", "Computer Fundamentals"], // You can edit this
      link: "https://www.linkedin.com/in/adeesha-prabashwara-549464386/"
    },

    // Certificate 7: AI/ML Engineer - Stage 1
    {
      id: 6,
      img: sliitLogoJpg,
      role: "AI/ML Engineer - Stage 1",
      company: "SLIIT",
      date: "Jan 2026",
      desc: "Certificate of completion for the Al/ML Engineer - Stage 1 course from the Sri Lanka Institute of Information Technology (SLIIT). This program covered foundational concepts in Artificial Intelligence and Machine Learning.", // You can edit this
      skills: ["Artificial Intelligence (AI)", "Machine Learning", "Python (Programming Language)"], // You can edit this
      link: "https://code.sliit.org/certificates/02e1qytict" // Replace with your certificate link
    },

    // Certificate 8: Python for Beginners
    {
      id: 7,
      img: simplilearnLogo,
      role: "Python for Beginners",
      company: "Simplilearn",
      date: "Jan 2026",
      desc: "Certificate of completion for the Python for Beginners course from Simplilearn, covering Python programming language and basic coding fundamentals.", // You can edit this
      skills: ["Python (Programming Language)", "Basic Coding"], // You can edit this
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTcxNDM1M185OTYxMDIyXzE3NjgzNzI5NTI1MzUucG5nIiwidXNlcm5hbWUiOiJTLlAuQS5BLlBSQUJBU0hXQVJBIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4214%2FPython%2520for%2520Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1547674406611912058&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVN%2FctSq1KjPILjUqyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAFOvy3tBAAAA" // Replace with your certificate link
    },

    
  ];
  
  export const education = [
    
    
      // ...existing entries...
      {
        id: 5,
        img: sliitLogo,
        school: "Sri Lanka Institute of Information Technology (SLIIT)",
        date: "2023 - 2027",
      
        desc: `Currently a third-year undergraduate specializing in Software Engineering at SLIIT. Actively developing skills in full-stack web development, with hands-on experience in MERN stack projects and software engineering fundamentals. Motivated to apply academic knowledge to real-world applications and continuously learn modern technologies.`,
        degree: "BSc (Hons) in Information Technology"
      },

      {
        id: 6,
        img: schoolLogo,
        date: "2007 - 2021",
        desc: `Completed secondary education at Rahula College, Matara. Studied in the Physical Science stream for GCE Advanced Level and sat for the examination in 2021, achieving Combined Mathematics – B, Chemistry – C, Physics – S. Successfully passed GCE Ordinary Level with strong results, including distinctions in Mathematics, ICT, and Science.

Actively represented the school football team from Under-13 to Under-20 levels between 2012 and 2020. Served as Vice-Captain in 2018 and Captain in 2019, and was nominated as Best Player at the Battle of Golden Ensigns football encounter in 2017. Awarded Sri Lanka Schools Sports Colours in 2019 for outstanding performance.

Represented Sri Lanka Under-18 Schools Football Team at the 47th Asian Schools Football Championship held in Balikpapan, Indonesia in 2019. Recognized for strong discipline, leadership, teamwork, and excellent character.`,
        degree: "Rahula College, Matara"
      },
  ];
  
  export const projects = [
  {
    id: 0,
    title: "Online Electrical Appliance Selling System",
    description: "Full-stack e-commerce web application for selling electrical appliances with comprehensive product management and user experience features. Implemented CRUD operations for product catalog, inventory tracking, order management, user authentication, and payment processing.",
    images: [electricalStore1, electricalStore2, electricalStore3, electricalStore4],
    tags: ["React", "Node.js", "Express", "MongoDB", "Full Stack"],
    github: "https://github.com/Adhi-247/Vithanage_Enterprises.git",
    webapp: "https://youtu.be/QMz47hbfKNc",
    tech_stack: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack"]
  },
  {
    id: 1,
    title: "Disaster Management System for Sri Lanka",
    description: "Comprehensive disaster relief web application enabling citizens to request emergency assistance, report missing persons, and track active disasters across Sri Lankan districts. Implemented CRUD operations for help requests and missing person reports with real-time data storage, Base64 image upload functionality, district-based filtering, and multi-resource tracking.",
    images: [disasterManagement1, disasterManagement2, disasterManagement3, disasterManagement4],
    tags: ["React", "Node.js", "Express", "MongoDB", "React Router"],
    github: "https://github.com/Adhi-247/Real-World-Problem-Solve.git",
    webapp: "https://youtu.be/oPUGlVF6pkc",
    tech_stack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "React Router"]
  },
  {
    id: 2,
    title: "Online Train Reservations System",
    description: "Java-based train booking system developed for user registration, train schedule management, and seat booking. Implemented real-time seat availability checks and secure booking-payment system. Designed interactive dashboards for users and admin with responsive UI.",
    images: [trainReservation1, trainReservation2, trainReservation3, trainReservation4],
    tags: ["Java", "JavaScript", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Adhi-247/Train-Reservation-System.git",
    webapp: "https://youtu.be/YOUR_VIDEO_LINK_HERE",
    tech_stack: ["Java Servlet", "JavaScript", "MySQL", "HTML", "CSS"]
  },
  {
    id: 3,
    title: "Boat Safari Trip Management System",
    description: "PHP-based booking management system with user-friendly interface for safari listing, availability checking, and booking management. Added filtering and sorting features for safari type, pricing, capacity, and time slots. Implemented automated email notifications for booking confirmations and updates with responsive front-end.",
    images: [boatSafari1, boatSafari2, boatSafari3, boatSafari4],
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Adhi-247/boat-safari-management.git",
    webapp: "https://youtu.be/YOUR_VIDEO_LINK_HERE",
    tech_stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"]
  }
];
  
  export const services = [
  {
    title: "Mobile Application Development",
    description: "Custom mobile application development for Android and iOS platforms using modern technologies like React Native, Kotlin, and Java. From concept to deployment, I deliver intuitive and performant mobile experiences.",
    icon: "mobile",
  },
  {
    title: "Web Development",
    description: "Full-stack web development services with modern frameworks and technologies. I specialize in creating responsive, scalable, and optimized web applications with clean code and best practices.",
    icon: "web",
  },
  {
    title: "Database Design & Management",
    description: "Professional database design and management services using MySQL, MongoDB, and PostgreSQL. I create efficient database schemas, optimize queries, implement data security, and ensure scalable data architecture for web and mobile applications.",
    icon: "database",
  },
  {
    title: "Problem Solving & Software Solutions",
    description: "Custom software solutions for real-world problems. I analyze business requirements and develop tailored applications that solve specific challenges, from disaster management to e-commerce platforms and booking systems.",
    icon: "solution",
  },
];