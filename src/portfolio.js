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
  username: "Tran Dinh Manh Cuong",
  title: "Hi all, I'm Cường",
  subTitle: emoji(
    "A highly motivated AI Engineer with over 3 years of experience in developing and deploying AI solutions, specializing in machine learning, computer vision, and large language models."
  ),
  resumeLink: "https://1drv.ms/b/c/b98cbb36b0ab76d5/Edf_ul3PZblEhe_ODSC8Ak4BW0melCfVRaXUIxX4o9I4qg?e=cUN3Ip", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/cuongtran2203",
  linkedin: "https://www.linkedin.com/in/cuontran2000/",
  gmail: "cuongtdm2000@gmail.com",
  facebook: "https://www.facebook.com/Cuongtdm2000",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI ENGINEER WHO LOVES TO BUILD INNOVATIVE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Develop and deploy AI models for computer vision and natural language processing"
    ),
    emoji("⚡ Research and fine-tune large language models (LLMs)"),
    emoji(
      "⚡ Build and optimize AI pipelines for production environments"
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Raspberry Pi",
      fontAwesomeClassname: "fas fa-microchip"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hanoi University of Science and Technology",
      logo: require("./assets/images/hustLogo.png"),
      subHeader: "Master of Mechatronics Engineering",
      duration: "2023 - 2025",
      desc: "Researching and developing AI models for robot navigation.",
      descBullets: [
        "Co-author of ISI (Q1) paper on semantic segmentation for robot navigation",
        "Developed lightweight AI models for autonomous robots"
      ]
    },
    {
      schoolName: "Hanoi University of Science and Technology",
      logo: require("./assets/images/hustLogo.png"),
      subHeader: "Bachelor of Mechatronics Engineering",
      duration: "2018 - 2023",
      desc: "Graduated with a focus on AI and robotics.",
      descBullets: [
        "Published papers on face recognition and semantic segmentation",
        "Developed AI solutions for smart camera systems"
      ]
    }
  ]
};
// Tech Stack
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Deep learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Generative models",
      progressPercentage: "85%"
    },
    {
      Stack: "Computer vision",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};



// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Researcher and Developer",
      company: "GMO-Z.com Runsystem",
      companylogo: require("./assets/images/gmozLogo.png"),
      date: "Feb 2024 – Present",
      desc: "Developing and deploying AI solutions for various projects.",
      descBullets: [
        "Built image generation systems using Stable Diffusion",
        "Developed license plate recognition systems with 97% accuracy",
        "Fine-tuned large language models for information extraction"
      ]
    },
    {
      role: "AI Engineer",
      company: "AI Academy",
      companylogo: require("./assets/images/AIA.jpg"),
      date: "Feb 2022 – Feb 2024",
      desc: "Maintained and developed AI projects for clients.",
      descBullets: [
        "Constructed vehicle detection systems for ITS solutions",
        "Optimized AI models for edge devices",
        "Deployed AI models using TorchServe and Triton"
      ]
    }
  ]
};

// Open Source Section

const openSource = {
  display: false, // Set to true to show Open Source section
  githubProfile: "https://github.com/cuongtran2203"
};

// Big Projects Section

const bigProjects = {
  display: false, // Set to true to show Big Projects section
  projects: []
};

// Achievements Section

const achievementSection = {
  display: false, // Set to true to show Achievements section
  achievements: []
};

// Blog Section

const blogSection = {
  display: false, // Set to true to show Blog section
  blogs: []
};

// Talk Section

const talkSection = {
  display: false, // Set to true to show Talks section
  talks: []
};

// Podcast Section

const podcastSection = {
  display: false, // Set to true to show Podcast section
  podcasts: []
};

// Twitter Details

const twitterDetails = {
  userName: "your-twitter-username", // Replace "your-twitter-username" with your Twitter username
  display: false // Set to true to show Twitter section
};

// Resume Section

const resumeSection = {
  display: true, // Set to true to show Resume section
  resumeLink: "https://1drv.ms/b/c/b98cbb36b0ab76d5/Edf_ul3PZblEhe_ODSC8Ak4BW0melCfVRaXUIxX4o9I4qg?e=cUN3Ip"
};

// Hireable Status

const isHireable = true; // Set to true if you are available for hire

// Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84-356-780-137",
  email_address: "cuongtdm2000@gmail.com"
};

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
  isHireable,
  resumeSection
};