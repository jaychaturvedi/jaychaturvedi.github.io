/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jay Chaturvedi",
  title: "Hi, I'm Jay Chaturvedi",
  subTitle: emoji(
    "6+ Years Experienced Full Stack Software Engineer with expertise in MERN, Java, React Native, Nestjs, Typescript. Proficient in MongoDB, PostgreSQL, and Python. Curious and passionate about continuous learning. Ready to contribute effectively to dynamic projects."
  ),
  resumeLink: "https://drive.google.com/file/d/1zQC5sCkHz3tE_20KEUPJiddS_6KgZAGy/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jaychaturvedi",
  linkedin: "https://www.linkedin.com/in/jay-chaturvedi",
  gmail: "jaychaturvedi18@gmail.com",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Software Engineer, Passion for solving complex problems on scale",
  skills: [
    emoji(
      "⚡ Solve complex problems using Engineering Best practices"
    ),
    emoji(
      "⚡ Design system for scale."
    ),
    emoji(
      "⚡ Believer, Solve the problem, Code will come"
    )
  ],
  softwareSkills: [{
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java fa-beat"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js fa-beat"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react fa-beat"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node fa-beat"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database fa-beat"
    },
    {
      skillName: "Mongodb",
      fontAwesomeClassname: "fa-solid fa-leaf fa-beat"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws fa-beat"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker fa-beat"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [{
    schoolName: "West Bengal University Of Technology",
    logo: require("./assets/images/wbut-logo.jpg"),
    subHeader: "Bachelor of Technology CSE",
    duration: "July 2014 - June 2018",
    desc: "Major in computer science and fundamentals of CS engineering",
    descBullets: [
      "Data Structures and algorithms",
      "Smart Mirror, Smart Parking project"
    ]
  }]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [{
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Leadership/Mentorship", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [{
      role: "Senior FullStack Software Engineer",
      company: "Terrascope",
      companylogo: "https://media.licdn.com/dms/image/v2/D560BAQFQOlTt1FGfkQ/company-logo_200_200/company-logo_200_200/0/1720852835329/terrascope_climatetech_logo?e=1736380800&v=beta&t=bPG0aXjkNyEbc4ThilkwiJ04RYbhoNTDIYus-ucrWmo",
      date: "Sep 2023 – Sep 2024",
      desc: "6 years Experienced Senior Full Stack Engineer building large scale solution for enterprises to decarbonise their product journey with AI assisted accuracy to manage, measure, and reduce their carbon footprint. https://www.terrascope.com/",
      descBullets: [
        "Product-level decarbonisation by identifying emissions hotspots across the life cycle ",
        "Rapidly process thousands of SKUs with an AI-assisted approach and gets to 70% accuracy without supplier data, unlocking emission insights in days not months"
      ]
    },
    {
      role: "Lead Fullstack Developer",
      company: "Bimaplan",
      companylogo: require("./assets/images/bimaplan.jpeg"),
      date: "Aug 2021 – Sep 2023",
      desc: "Experienced Full Stack Engineer at Bimaplan, integrating insurers for growth. Proficient in Next.js, React.js, Node.js, AWS, MongoDB, Postgresql and Storybook. https://bimaplan.co/",
      descBullets: [
        "Lead team of 8+ developer to modernize outdated systems for efficiency.",
        "Integrated insurers on backend system, driving B2C growth.\n",
        "Scaled system from monolith to microservices",
        "Optimised code and webpage performance",
      ]
    },
    {
      role: "Fullstack Developer",
      company: "NODEZAP",
      date: "Apr 2020 – Aug 2021",
      companylogo: "https://media.licdn.com/dms/image/v2/C560BAQHehM9VX7Vm0w/company-logo_200_200/company-logo_200_200/0/1633670475879/nodezap_logo?e=1736380800&v=beta&t=TW--ZnLUhcMlIisXdojyfqyHWSVpFtz4UDBnrkyKmIE",
      desc: "Fullstack web and mobile developer at Nodezap, crafting low code saas platform for creating business analytics and mobile app for seamless customer journery. Skilled in React, ReactNative, Node.js, Go, ElasticSearch, MongoDB, and AWS. https://www.nodezap.com/",
      descBullets: [
        "Engineered low code saas.",
        "Developed admin dashboards",
        "Build and deployed mobile apps on playstore",
      ]
    },
    {
      role: "Web Developer",
      company: "WIPRO",
      companylogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSObheeS3KZfMJ2o8bGmmt6PPWEKJFtj7t9KQ&s",
      date: "October 2018 – Mar 2020 ",
      desc: "Worked as backend and frontend developer, achieving full code coverage.",
      descBullets: [
        "Achieved full code coverage during.",
        "Developed software components using React, Python, and Node.js."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [{
      image: "https://media.licdn.com/dms/image/v2/D560BAQHi2EWJxUe1nA/company-logo_200_200/company-logo_200_200/0/1692719305646/health_on_stealth_logo?e=1735776000&v=beta&t=cWljnz3G745oFQx4cWb2zkohbpK8yu55YFQDOThLXmw",
      projectName: "Healthomot",
      projectDesc: "Provided consultation on setting up the codebase and building right tech team in initital phase",
      footerLink: [{
          name: "Visit Website",
          url: "https://www.linkedin.com/company/healthomot/about/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/D560BAQFyJdXzELtGmA/company-logo_200_200/company-logo_200_200/0/1715426016375/able_money_logo?e=1735776000&v=beta&t=BnctvWsanZFM-sCRk-IcZljdC12zLfGCTKejFT7ZTks',
      projectName: "Able Money",
      projectDesc: "Developed backend and responsive frontend for MVP launch of product",
      footerLink: [{
        name: "Visit Website",
        url: "https://ablemoney.in/"
      }]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [{
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [{
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [{
        name: "View Google Assistant Action",
        url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
      }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [{
          name: "Certification",
          url: ""
        },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [{
      url: "https://medium.com/@jaychaturvedi18/how-to-secure-your-api-with-json-web-tokens-in-nodejs-fb4d71313001",
      title: "How to Secure Your API With JSON Web Tokens in nodejs",
      description: "How to secure your api endpoints with JWT token with a middleware to decrypt."
    },
    {
      url: "https://medium.com/@jaychaturvedi18/a-brief-introduction-to-django-mvt-framework-8ef46cc321ab",
      title: "A Brief introduction to Django MVT framework",
      description: "This post is about giving you an idea about what is a web-framework and how it is used to make a web application."
    },
    {
      url: "https://medium.com/@jaychaturvedi18/react-js-lifecycle-6727bd2cf82c",
      title: "REACT JS LIFECYCLE",
      description: "The React component, like anything else in the world, goes through the following phases"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [{
    title: "Build Actions For Google Assistant",
    subtitle: "Codelab at GDG DevFest Karachi 2019",
    slides_url: "https://bit.ly/saadpasta-slides",
    event_url: "https://www.facebook.com/events/2339906106275053/"
  }],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7478523376",
  email_address: "jaychaturvedi18@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "jay", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};