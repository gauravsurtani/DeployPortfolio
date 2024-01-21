/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Gaurav's Portfolio",
  description:
    "Research Intern @NASA | MS-AI @SJSU | Well-versed in Full-Stack Development, Data Science, Machine Learning and Artificial Intelligence in Natural Language Processing.",
  og: {
    title: "Gaurav Surtani Portfolio",
    type: "website",
    url: "http://gauravsurtani.com/",
  },
};

//Home Page
const greeting = {
  title: "Gaurav Surtani",
  logo_name: "GauravSurtani",
  // nickname: "GS",
  subTitle:
    "Research Intern @NASA | MS-AI @SJSU | Well-versed in Full-Stack Development, Data Science, Machine Learning and Artificial Intelligence in Natural Language Processing.",
  resumeLink:
    "https://drive.google.com/file/d/1BvAQYNWT8hXTpAe36YQoEg4gkyHdc6yw/view?usp=drive_link",
  portfolio_repository: "https://github.com/gauravsurtani/masterPortfolio",
  githubProfile: "https://github.com/gauravsurtani",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/gauravsurtani",
  // linkedin: "https://www.linkedin.com/in/gaurav-surtani/",
  // gmail: "gaurav.surtani.tech@gmail.com",
  {
    name: "Github",
    link: "https://github.com/gauravsurtani",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gaurav-surtani/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:gaurav.surtani.tech@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Well-versed in HTML5, CSS3, SASS, JavaScript / TypeScript and GoLang.",
        "⚡ Building responsive website front end using Angular, React, Next with deploying platforms like Netlify & Vercel.",
        "⚡ Developing web accessible and W3C's standard adhering reusable components.",
        "⚡ Creating application backend in Node, Express, MongoDB, PostgreSQL.",
        "⚡ Creating static-webpages in Hugo along with various CMS tools like Wix, Webflow CMS, Strapi CMS.",
        "⚡ End point deployments using Docker and Kubernetes on AWS, GCP.",
      ],
      softwareSkills: [
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Hugo",
          fontAwesomeClassname: "simple-icons:hugo",
          style: {
            color: "#FF4088",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Jasmine",
          fontAwesomeClassname: "simple-icons:jasmine",
          style: {
            color: "#8A4182",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Oracle DB",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#F80000",
          },
        },
        {
          skillName: "MYSQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Mongo DB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    }    
  ],
};

const degrees = {
  degrees: [
    {
      title: "San Jose State University",
      subtitle: "Master's in Artificial Intelligence",
      logo_path: "sjsu.png",
      alt_name: "SJSU",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Developed proficiency in advanced AI and Machine Learning techniques, achieving a deep understanding from conceptualization to deployment across domains like robotics, NLP, and computer vision.",
        "⚡ Expertly navigated complex AI challenges, leveraging state-of-the-art algorithms, technologies, and tools to design and implement innovative solutions in Machine Learning and AI.",
        "⚡ Demonstrated leadership and collaborative skills in team settings, driving the development of cutting-edge AI and Machine Learning applications with a focus on ethical, economical, and environmental considerations.",
        "⚡ Committed to continuous professional growth, actively engaging in lifelong learning to stay at the forefront of the engineering field, with a particular focus on AI advancements.",
        "⚡ Honed communication skills, effectively conveying complex AI and Machine Learning concepts and solutions to diverse audiences, ensuring clarity and persuasion.",
      ],
      website_link: "https://www.sjsu.edu/",
    },
    {
      title: "Sinhgad Academy of Engineering, Pune",
      subtitle: "Bachelor's in Engineering - Information Technology",
      logo_path: "Savitribai_Phule_Pune_University_Logo.png",
      alt_name: "University of Pune",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ Mastered core computer science disciplines including Data Structures, Algorithms, Database Management, Operating Systems, and Computer Architecture.",
        "⚡ Additionally, I have completed specialized courses in areas such as Design & Analysis of Algorithms, Computer Networks, and Systems Programming.",
        "⚡ Benefited from hands-on, practical experience through a full-year project and full-time industrial training, integrating theoretical knowledge with real-world application.",
        "⚡ Awarded a prestigious scholarship recognizing academic excellence, granted to a select percentage of students.",
        "⚡ Continuously excelled in academic endeavors, receiving commendations for outstanding performance throughout the curriculum.",
      ],
      website_link: "https://www.unipune.ac.in/",
    },    
  ],
};

const degrees1 = {
  degrees: [
    {
      title: "NASA Ames Research Center",
      subtitle: "Research Assistant",
      logo_path: "nasa_logo.png",
      alt_name: "NASA",
      duration: "December 2023 - Present",
      descriptions: [
        "⚡ Executed meticulous Geospatial Analysis of flight paths' adherence to ATC procedures using Pyproj and Xmltree, ensuring compliance and operational efficiency.",
        "⚡ Mastered the use of Folium for geospatial data visualization, adeptly presenting complex airspace information in an intuitive and accessible format.",
        "⚡ Proactively identified navigational challenges within standard flight paths, leading to substantial cost savings in aviation fuel and enhancing the overall efficiency of aviation operations.",
        "⚡ Utilized GeoPandas for geospatial data processing and analysis.",
      ],
      website_link: "https://www.nasa.gov/ames",
    },
    {
      title: "San Jose State University",
      subtitle: "Research Assistant",
      logo_path: "sjsu.jpg",
      alt_name: "SJSU",
      duration: "July 2023 - December 2023",
      descriptions: [
        "⚡ Focused on the development of user interfaces using React, Tailwind CSS, SASS, and deploying platforms Netlify & Vercel.",
        "⚡ Managed content with Wix CMS and Strapi CMS to showcase static pages effectively.",
        "⚡ Engaged in Natural Language Processing tasks utilizing Langchain and HuggingFace's transformers.",
        "⚡ Contributed to the development of a multilingual translation system translating from one language to 25 others.",
      ],
      website_link: "https://www.sjsu.edu/",
    },
    {
      title: "Ascendion",
      subtitle: "Senior Software Engineer",
      logo_path: "ascendion_logo.png",
      alt_name: "Ascendion",
      duration: "November 2022 - August 2023",
      descriptions: [
        "⚡ Acted as the initial decision-maker for project architectures, defining timelines and data requirements for website functionality.",
        "⚡ Mentored a team of 20 engineers and conducted over 500 code review sessions to maintain high-quality code standards.",
        "⚡ Addressed limitations in existing frameworks by collaborating with developers to resolve accessibility issues.",
        "⚡ Led a project integrating OpenAI's ChatGPT into Visual Code Studio Extension, enhancing code quality and efficiency.",
        "⚡ Stayed updated with the latest technologies, utilizing ES6 and Angular 16 hooks, and explored emerging technologies like Extended Reality (WebXR), Unity Engine C#, and Unreal Engine for potential integration.",
      ],
      website_link: "https://www.ascendion.com/",
    },
    {
      title: "Collabera",
      subtitle: "Software Engineer",
      logo_path: "collabera_logo.png",
      alt_name: "Collabera",
      duration: "December 2021 - December 2022",
      descriptions: [
        "⚡ Engineered cross-platform applications with cookie services for enhanced user experience and data accessibility.",
        "⚡ Spearheaded the creation of intricate dashboards significantly improving data visualization.",
        "⚡ Achieved a 75% increase in information transfer efficiency to upper management, streamlining communication channels.",
        "⚡ Developed an Angular Framework-driven assessment tool for Site Reliability & DevOps, demonstrating proficiency in emerging technologies.",
        "⚡ Orchestrated the deployment of an intelligent cloud economics User Interface.",
      ],
      website_link: "https://www.collabera.com/",
    },
    {
      title: "LIBS",
      subtitle: "Software Developer",
      logo_path: "libs_logo.png",
      alt_name: "LIBS",
      duration: "January 2021 - November 2021",
      descriptions: [
        "⚡ Orchestrated the integration of a cloud-based Sales system, automating inventory reporting processes for seamless operations.",
        "⚡ Engineered an intuitive user interface enriched with dynamic charts and graphs utilizing popular React libraries such as Chart.js, Recharts, and Victory Charts.",
        "⚡ Spearheaded the production team ensuring precision and timeliness in deliveries while fostering a culture of operational excellence.",
      ],
      website_link: "https://libsbrasserie.com/", // Add the website link if available
    },
    {
      title: "Accenture",
      subtitle: "Software Engineer",
      logo_path: "accenture_logo.png",
      alt_name: "Accenture",
      duration: "October 2018 - December 2020",
      descriptions: [
        "⚡ Resolved critical system test and validation problems for faster execution of daily batch jobs, troubleshooting various ETL-related jobs/schedules using Informatica and Abinitio in data warehousing.",
        "⚡ Constructed automation scripts in Unix & MS-VBA to provide a comprehensive historical analysis of system processes & resources.",
        "⚡ Investigated data on production batch to understand trends, forecast changes, and build more effective models, boosting system readiness 3 months prior to data switchover.",
        "⚡ Utilized workflow scheduler to seamlessly connect to a Unix-based system, orchestrating the execution of batch jobs with precision and efficiency.",
        "⚡ Developed automation scripts using MS VBA and Python to automate the generation of daily reports, enhancing operational efficiency and accuracy.",
      ],
      website_link: "https://www.accenture.com/",
    },
    {
      title: "Enthralltech Private Limited",
      subtitle: "Frontend Developer",
      logo_path: "enthralltech_logo.jpeg",
      alt_name: "Enthralltech",
      duration: "May 2018 - October 2018",
      descriptions: [
        "⚡ Managed Big Data frameworks MongoDB/Angular/.NET framework on an e-learning platform.",
        "⚡ Managed IAM systems, dashboards, gamification learning modules via items stored in AWS warehouses.",
        "⚡ Delved into an experimental chatbot system powered by NoSQL, reducing manual intervention for easy tasks.",
      ],
      website_link: "https://www.enthral.ai/",
    },
  ],
};




const certifications = {
  certifications: [
    {
      title: "Ethics in the Age of Generative AI",
      subtitle: "LinkedIn",
      logo_path: "linkedin_logo.png",
      certificate_link: "", // Add the link to the certificate if available
      alt_name: "LinkedIn",
      color_code: "#FFFFFF", // LinkedIn color
    },
    {
      title: "Generative AI: The Evolution of Thoughtful Online Search",
      subtitle: "LinkedIn",
      logo_path: "linkedin_logo.png",
      certificate_link: "", // Add the link to the certificate if available
      alt_name: "LinkedIn",
      color_code: "#FFFFFF", // LinkedIn color
    },
    {
      title: "Streamlining Your Work with Microsoft Bing Chat",
      subtitle: "LinkedIn",
      logo_path: "linkedin_logo.png",
      certificate_link: "", // Add the link to the certificate if available
      alt_name: "LinkedIn",
      color_code: "#FFFFFF", // LinkedIn color
    },
    {
      title: "The Complete Python Bootcamp From Zero to Hero in Python",
      subtitle: "Udemy",
      logo_path: "udemy_logo.png",
      certificate_link: "", // Add the link to the certificate if available
      alt_name: "Udemy",
      color_code: "#FFFFFF", // Udemy color
    },
    {
      title: "What Is Generative AI?",
      subtitle: "LinkedIn",
      logo_path: "linkedin_logo.png",
      certificate_link: "", // Add the link to the certificate if available
      alt_name: "LinkedIn",
      color_code: "#FFFFFFF", // LinkedIn color
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Amazon Web Services (AWS)",
      logo_path: "aws_logo.png",
      certificate_link: "", // Add the link to the certificate if available
      alt_name: "AWS",
      color_code: "#FFFFFF", // AWS color
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle: "Amazon Web Services (AWS)",
      logo_path: "aws_logo.png",
      certificate_link: "", // Add the link to the certificate if available
      alt_name: "AWS",
      color_code: "#FFFFFF", // AWS color
    },
    {
      title: "AMCAT Certified Data Processing Specialist",
      subtitle: "Aspiring Minds",
      logo_path: "aspiring_minds_logo.png",
      certificate_link: "", // Add the link to the certificate if available
      alt_name: "Aspiring Minds",
      color_code: "#FFFFFF", // Aspiring Minds color
    }
  ]
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Research Intern",
          company: "NASA Ames Research Center",
          company_url: "https://www.nasa.gov/ames",
          logo_path: "nasa_logo.png",
          duration: "December 2023 - Present",
          location: "Mountain View, California, United States",
          description:
            "Engaging in advanced research focusing on user interface development using React, Tailwind CSS, SASS, and deployment platforms like Netlify & Vercel. Managing content with Wix CMS and Strapi CMS, and actively participating in NLP tasks and Geo-Spatial Research, enhancing map-based insights and decision-making.",
          color: "#0879bf",
        },
        {
          title: "Research Assistant",
          company: "San Jose State University",
          company_url: "https://www.sjsu.edu/",
          logo_path: "sjsu.jpg",
          duration: "July 2023 - Present",
          location: "San Jose, California, United States",
          description:
            "Contributing to multilingual translation systems, deploying scalable web applications using Google Cloud App Engine, Firestore, Cloud Engine, and Docker. Involved in Geo-Spatial Research utilizing GeoPandas, R's dplyr, ggplot2, stats packages for EDA, and applying advanced statistical and machine learning models.",
          color: "#0879bf",
        },
        {
          title: "Senior Software Engineer",
          company: "Ascendion",
          company_url: "https://www.ascendion.com/",
          logo_path: "ascendion_logo.png",
          duration: "November 2022 - August 2023",
          location: "Basking Ridge, New Jersey, United States",
          description:
            "Spearheading architectural leadership, mentorship, complex problem-solving, performance optimization, and technical documentation. Integrating OpenAI's ChatGPT into Visual Code Studio Extension, managing multiple branches across Git platforms, ensuring project planning compliance, and staying updated with the latest technologies like ES6 and Angular 16 hooks.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Collabera Inc.",
          company_url: "https://www.collabera.com/",
          logo_path: "collabera_logo.png",
          duration: "December 2021 - December 2022",
          location: "Basking Ridge, New Jersey, United States",
          description:
            "Engineered cross-platform applications, spearheaded the creation of intricate dashboards, achieved a 75% increase in information transfer efficiency, developed an Angular Framework-driven assessment tool, built a web application for Azure Backend, and recognized with the Employee of the Quarter Award for multitasking and meticulous attention to detail.",
          color: "#0879bf",
        },
        {
          title: "Software Developer",
          company: "LIBS",
          company_url: "https://libsbrasserie.com/", // Add URL if available
          logo_path: "libs_logo.png", // Add logo if available
          duration: "January 2021 - November 2021",
          location: "Cotonou, Littoral, Benin",
          description:
            "Orchestrated the integration of a cloud-based Sales system, engineered an intuitive user interface, and spearheaded the production team ensuring precision and timeliness in deliveries while fostering a culture of operational excellence.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Accenture",
          company_url: "https://www.accenture.com/",
          logo_path: "accenture_logo.png",
          duration: "October 2018 - December 2020",
          location: "Pune, Maharashtra, India",
          description:
            "Resolved critical system test and validation problems, constructed automation scripts in Unix & MS-VBA, investigated data on production batch to understand trends and build more effective models, utilized workflow scheduler, and developed automation scripts using MS VBA and Python to enhance operational efficiency and accuracy.",
          color: "#0879bf",
        },
        {
          title: "Frontend Developer",
          company: "Enthralltech Private Limited",
          company_url: "https://www.enthral.ai/",
          logo_path: "enthralltech_logo.jpeg",
          duration: "May 2018 - October 2018",
          location: "Pune Area, India",
          description:
            "Managed Big Data frameworks MongoDB/Angular/.NET framework on an e-learning platform, managed IAM systems dashboards, gamification learning modules via items stored in AWS warehouses, and delved into an experimental chatbot system powered by NoSQL.",
          color: "#0879bf",
        },        
      ],
    }    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    }
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "LinkedIn_Gaurav-modified.png",
    description:
      "I am dedicated to advancing the field of AI through innovative solutions in machine learning, natural language processing, computer vision, and full-stack development. For collaboration, professional inquiries, or simply to connect, please reach out to me through the following platforms:\n\n"
  }
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  degrees1,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
