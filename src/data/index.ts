export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Resume", link: "/resume" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I enjoy turning clean designs into real, working web apps—built from scratch",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/b4.svg",
    spareImg: "/grid.svg",
  },

  {
    id: 5,
    title: "Currently building a data visualization website",
    description: "Insight Flow",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 152532523,
    title: "CloudGate - secure identity management (SSO)",
    des: "Enterprise-grade Single Sign-On (SSO) portal that centralized user authentication for over 370 SaaS applications. Leveraging Keycloak and advanced security protocols.",
    img: "/projects/cloudgate.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/projects/keycloak.svg", "/projects/gin.webp", "/projects/go.png"],
    link: "https://cloudgate-frontend-258151641965.us-central1.run.app",
    active: true
  },
  {
    id: 2525245252,
    title: "Cleaner Roster",
    des: "comprehensive e-commerce platform for cleaning services, featuring a dynamic dashboard to visualize real-time customer, order, and monthly sales analytics",
    img: "/projects/cleaner-roster.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/projects/cloudflare.png", "/projects/hono.svg"],
    link: "https://cleaner-roster.vercel.app/",
    active: false
  },
  {
    id: 3245425252,
    title: "Insight Flow - Data visualization app",
    des: "A web platform that allows users to connect databases, visualize data through interactive graphs and insights. Features include OAuth login, workspace creation, and real-time data management",
    img: "/insightflow.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "c.svg",],
    link: "https://insight-flow-mh.vercel.app",
    active: true
  },
];



export const testimonials = [
  {
    quote:
      "Girijesh is an outstanding software engineer and team member in agile environments. His effective communication and unwavering strength shine through. Girijesh's comprehension in authentication is truly exceptional, taking his contributions to the next level.",
    name: "Andy Moc",
    title: "Software Engineer",
  },
  {
    quote:
      "I had a fantastic experience working with Giri on the FreshFeasts mobile app. He's a strong collaborator who brings a great attitude to any project. In addition to being a great teammate, he's a skilled developer with strong attention to detail and determination to solve challenging problems. I strongly recommend Giri and wouldn't hesitate to work with him again!",
    name: "Caroline Robbins",
    title: "Full Stack Software Engineer",
  },
  {
    quote:
      "Girijesh is not only technically gifted, he also exhibits all the best qualities you look for in a team member. He is a reliable, empathetic, and naturally curious engineer who goes the extra mile to deliver strong results in his work. My experience working with Girijesh to refactor a monolithic API to a microservices architecture was top-notch and I highly recommend him as a software engineer.",
    name: "Joseph Camarena",
    title: "Software Engineer",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Front End Developer Intern",
    desc: "Developed secure and scalable Auth, Portfolio, and Profile (PNP) modules, following industry best practices in authentication and security",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer",
    desc: "Engineered a user-friendly registration process on the MLSA website that incorporated real-time feedback mechanisms. Speaker at MLSA KIIT's HacktoberfestxMLSA event, mentoring 250+ students on Git, open-source contributions, and community building in tech",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Back End Developer",
    desc: "Our team builds a website fostering global engagement. With 1300+ active members, it features engaging debates,empowering future leaders to explore and collaborate on global issues for innovative solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Web Developer co-lead",
    desc: "Maintained and developed the website for KIITFest, a large college festival with over 35,000 attendees, fostering a user-friendly platform for event information and registration",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/manishmh",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/manishkumar1262"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/manishmh",
  },
];
