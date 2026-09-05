export interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string[];
  skills: string[];
  experience: Experience[];
  techProficiency: TechCategory[];
  education: Education;
  languages: Language[];
  remoteReadiness: RemoteReadiness;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface RemoteReadiness {
  internet: string;
  power: string;
  equipment: string[];
  workspace: string;
  availability: string;
}

export const profileData: ProfileData = {
  name: "Janndhelle Marth Zulueta",
  title: "AI Automation & Technical Systems Specialist | AI-Assisted Software Developer",
  email: "Zuluetajanndhellemarth@gmail.com",
  phone: "0965 933 4337",
  location: "City of Valencia, Philippines",
  linkedin: "https://www.linkedin.com/in/janndhelle-marth-zulueta",
  github: "https://github.com/janndhelle",
  summary: [
    "Technically capable AI Automation and Software Specialist with 3+ years of experience implementing, troubleshooting, and optimizing web-based systems, digital workflows, and client solutions.",
    "Experienced with AI tools including Claude, ChatGPT, Gemini, and DeepSeek, with practical knowledge of AI-assisted development, workflow automation, APIs, JSON, databases, and system integrations.",
    "Strong background in independently taking technical requirements from implementation through testing, troubleshooting, deployment, documentation, and ongoing optimization.",
    "Experienced in analyzing how applications, APIs, databases, and workflows connect, identifying root causes of technical issues, and implementing practical solutions for business and client needs.",
    "Highly detail-oriented and self-directed, with strong problem-solving and technical communication skills. Comfortable researching solutions, learning new technologies quickly, testing workflows thoroughly, and communicating technical issues and solutions clearly to both technical and non-technical stakeholders."
  ],
  skills: [
    "AI Tools & AI-Assisted Engineering",
    "AI-Assisted Workflow Optimization",
    "API & System Integrations",
    "REST APIs, JSON & Web-Based Integrations",
    "Technical Troubleshooting & Debugging",
    "Workflow Testing & QA",
    "Process & Systems Optimization",
    "Google Apps Script",
    "Full-Stack Web Development",
    "JavaScript & ReactJS",
    "PHP & Laravel",
    "VueJS",
    "Database Management & SQL",
    "Root Cause Analysis",
    "Technical Documentation",
    "Client Technical Support",
    "Problem Solving & Analytical Thinking",
    "Independent Project Execution",
    "Rapid Technology Learning"
  ],
  experience: [
    {
      title: "Lead Developer & Systems Architect / Founder",
      company: "Larkacer-Nexus IT Solutions",
      period: "Jan 2026 – Present",
      description: [
        "Design, develop, deploy, and maintain full-stack web applications and customized digital solutions using Laravel, PHP, ReactJS, VueJS, JavaScript, MySQL, and PostgreSQL.",
        "Manage software projects across the full development lifecycle, including requirements analysis, system design, implementation, debugging, testing, deployment, maintenance, and client support.",
        "Analyze existing application logic, database structures, and workflows to identify software defects, data inconsistencies, performance issues, and process gaps.",
        "Develop and maintain a Barangay Management System with digitized clearance processing, incident/blotter tracking, resident records, and database-driven administrative workflows.",
        "Engineer responsive user interfaces and reusable application components while maintaining consistent functionality across desktop and mobile environments.",
        "Design and optimize relational database structures and SQL queries using MySQL and PostgreSQL, with emphasis on data integrity, accuracy, and efficient retrieval.",
        "Build business management and inventory systems for commercial clients and medical clinics, reducing manual data-entry workload by more than 50%.",
        "Develop and troubleshoot RESTful API integrations and data flows between front-end applications, backend services, and databases.",
        "Investigate reported application issues and perform root cause analysis to distinguish between software defects, data problems, workflow issues, and user-process errors.",
        "Use AI-assisted development tools including Claude, ChatGPT, Gemini, and DeepSeek to analyze code, investigate issues, accelerate implementation, automate repetitive development tasks, and improve technical workflows.",
        "Review, test, and validate AI-assisted code and recommendations before integrating solutions into production systems.",
        "Apply structured testing and troubleshooting practices to minimize regressions and maintain application reliability.",
        "Communicate technical findings, solutions, requirements, and project progress clearly to clients and non-technical stakeholders.",
        "Maintain project documentation and provide ongoing technical support, system maintenance, and continuous improvement."
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed / Independent Projects",
      period: "2023 – Present",
      description: [
        "Designed, developed, and deployed customized responsive websites using HTML5, CSS3, JavaScript, Bootstrap, and database-driven technologies.",
        "Managed complete project lifecycles from client consultation and requirements gathering through development, testing, deployment, and post-launch support.",
        "Maintained and enhanced existing websites and web applications by investigating bugs, implementing fixes, optimizing performance, and improving usability.",
        "Worked with backend scripts, databases, and application workflows to troubleshoot technical issues and maintain reliable system operation.",
        "Developed responsive interfaces optimized for desktop and mobile users.",
        "Integrated front-end applications with backend services and APIs where required.",
        "Performed testing and validation of functionality before deployment and after significant changes.",
        "Provided ongoing troubleshooting, maintenance, technical guidance, and operational support to business clients.",
        "Translated business requirements and non-technical concerns into practical software and workflow solutions.",
        "Maintained consistent project delivery and completed independent client projects on schedule."
      ]
    }
  ],
  techProficiency: [
    {
      category: "Programming & Web Development",
      items: ["JavaScript (ES6+)", "PHP", "Laravel", "ReactJS", "VueJS", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      category: "APIs & Backend",
      items: ["RESTful APIs", "JSON", "Backend Integration", "Server-Side Development"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "SQL", "Relational Database Design", "Database Troubleshooting", "Data Integrity"]
    },
    {
      category: "Version Control",
      items: ["Git", "GitHub"]
    },
    {
      category: "AI-Assisted Development",
      items: ["Claude", "ChatGPT", "Gemini", "DeepSeek", "AI-Assisted Engineering", "AI-Powered Code Analysis", "AI-Assisted Workflow Optimization"]
    },
    {
      category: "Development & Design",
      items: ["Responsive Web Design", "UI/UX", "Figma", "Component-Based Development"]
    },
    {
      category: "Automation & Productivity",
      items: ["Google Apps Script", "Google Workspace", "Microsoft 365", "Notion"]
    },
    {
      category: "Project & Collaboration",
      items: ["Trello", "Asana", "Slack", "Google Meet", "Zoom", "Agile / Scrum Workflows"]
    }
  ],
  education: {
    degree: "Bachelor of Science in Information Technology",
    institution: "Central Mindanao University",
    location: "Maramag, Bukidnon",
    year: "2023"
  },
  languages: [
    { name: "English", proficiency: "Fluent / Professional Proficiency" },
    { name: "Filipino", proficiency: "Native / Fluent" }
  ],
  remoteReadiness: {
    internet: "Primary: High-Speed Fiber 200 Mbps | Backup: Mobile 5G Hotspot",
    power: "Uninterruptible Power Supply (UPS) & Portable Power Station (4–6 hour backup runtime)",
    equipment: [
      "High-Performance Multi-Core Desktop/Workstation",
      "Dual Monitor Setup",
      "Noise-Cancelling Headset",
      "HD Web Camera"
    ],
    workspace: "Dedicated Private Home Office | Quiet Environment | Neutral/Professional Video-Call Background",
    availability: "Full-Time (40+ hrs/week) | Flexible alignment across US (EST/PST), UK (GMT), and AU (AEST) time zones"
  }
};