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
import homeImage from './assets/work_logo/home.jpeg';
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

import sschoolLogo from './assets/education_logo/sschool_logo.png';
import sliitLogo from './assets/education_logo/sliit.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import figmaLogo from './assets/work_logo/figma.png';
import android from './assets/work_logo/finance.jpg';
import  ecommerce from './assets/work_logo/ecommerce.png';


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
      
        desc: `Pursuing a Bachelor of Science in Information Technology at SLIIT, focusing on software engineering, and modern web technologies. Actively involved in tech clubs . Served as a sub-committee member of the Faculty of Computing Student Community for the 2025/26 academic year, contributing to student engagement and community initiatives.`,
        degree: "BSc (Hons) in Information Technology"
      },
   
  
    {
      id: 4,
      img: sschoolLogo,
  
      date: "2011 - 2022",
   
      desc: `Studied in the Commerce Stream for GCE Advanced Level (2011–2022), achieving C grades in Accounting and Business Studies, and completed Information and Communication Technology. Passed GCE O/L in 2018. Served as Head Prefect in 2020, President of the ICT Club, and an active member of the Media Unit. Volunteered at the Leo Club and participated in numerous extracurricular activities. Actively took part in and won prizes at annual sports meets, as well as zonal, provincial, island, and national championships in athletics, football, rugby, and chess. Achieved victories at zonal, Southern Province, and national levels in music and art competitions. Participated in new invention competitions at zonal, provincial, and all-island levels, winning several prizes. Also, won prizes and championships as an active member of the Youth Club.`,
      degree: "ST.Servatius Collage-Matara"
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "FabFarm Clothing Platform",
      image: figmaLogo,
      description: "A modern clothing platform UI/UX project with clean, user-friendly interface for seamless shopping experiences. Features intuitive navigation, responsive design, and streamlined checkout process.",
      tags: ["Figma", "UI/UX", "Prototyping", "Design System"],
      github: "https://github.com/dulsh1/fabfam-clothing",
      webapp: "https://www.figma.com/proto/AfBZ5DJSAkk7Ab281MELa6/fabfam-clothing",
      tech_stack: ["Figma", "Prototyping", "UX Research"]
    },
    {
      id: 1,
      title: "PAT PAT CLEANING",
      subtitle: "Laundry Management System",
      date: "Aug 2024 - Oct 2024",
      description: "Full-stack laundry management platform with real-time order tracking, payment integration, and comprehensive staff management portal. Features intuitive scheduling and automated notifications.",
      image: homeImage,
      tags: ["MySQL", "Express", "Java", "Bootstrap", "Full Stack"],
      github: "https://github.com/dulsh1/patpat-cleaning",
      webapp: "https://patpat-cleaning.vercel.app",
      tech_stack: ["Java", "MySQL", "Express", "Bootstrap"]
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description: "Advanced movie recommendation engine using React and modern APIs. Features personalized suggestions, dynamic content loading, and comprehensive search functionality.",
      image: movierecLogo,
      tags: ["React", "API", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/dulsh1/movie-recommendation",
      webapp: "https://movie-recommendation-app-jet.vercel.app",
      tech_stack: ["React", "RESTful APIs", "JavaScript"]
    },
    {id: 4,
title: "e-commerce store frontend",
description: "Modern e-commerce store frontend built with React. Features include product browsing, cart management, wishlist, responsive design, and seamless shopping experience similar to platforms like Daraz.",
image: ecommerce,
tags: ["React", "API", "JavaScript", "Tailwind CSS"],
github: "https://github.com/dulsh1/ecommerce-estore.git",
webapp: "https://ecommerce-estore.vercel.app",
tech_stack: ["React", "RESTful APIs", "JavaScript"]
    },

    {
      id: 3,
      title: "Finance Tracker App",
      image: android,
      description: "Comprehensive finance tracking application with expense management, budget planning, and financial analytics. Built with modern Android development practices and Material Design.",
      tags: ["Kotlin", "Android", "Firebase", "MVVM"],
      github: "https://github.com/dulsh1/financeTracker.git",
      webapp: "https://play.google.com/store/apps/details?id=com.dulsh1.financetracker",
      tech_stack: ["Kotlin", "Firebase", "Android SDK", "MVVM"]
    }
];
  
  export const services = [
  {
    title: "Mobile Application Development",
    description: "Custom mobile application development for Android and iOS platforms using modern technologies like React Native, Kotlin, and Java. From concept to deployment, I deliver intuitive and performant mobile experiences.",
    icon: "mobile", // or your icon component
  },
  {
    title: "Web Development",
    description: "Full-stack web development services with modern frameworks and technologies. I specialize in creating responsive, scalable, and optimized web applications with clean code and best practices.",
    icon: "web",
  },
  {
    title: "UI/UX Engineering",
    description: "User interface and experience design with a focus on user-centered principles. I create visually appealing and intuitive designs that enhance user engagement and satisfaction.",
    icon: "uiux",
  },
  // --- Add your new service below ---
  
];