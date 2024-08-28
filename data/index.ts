// export const gridItems=[
//     {title:'Title1',description:'Desc1',id:1},
//     {title:'Title1',description:'Desc1',id:1},
//     {title:'Title1',description:'Desc1',id:1},
//     {title:'Title1',description:'Desc1',id:1},
//   ]
export const navItems = [
    { name: "About", link: "#projects" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#testimonials" },
    { name: "Achievements", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
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
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
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
      id: 1,
      title: "NewsMonkey-Daily Dose of News!",
      des: "Welcome,the responsive news application built with ReactJS. Stay updated with the latest news articles all in one place.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "NewsMonkey-NewsApp",
    },
    {
      id: 2,
      title: "NoteMaster - Note Taking App!",
      des: "WebApp for organizing your thoughts and ideas.Developed with ReactJS, NoteMaster offers a seamless and efficient note-taking experience.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "NoteMaster-Note Taking App",
    },
    {
      id: 3,
      title:"Online Resume Builder!",
      des: "A go-to tool for crafting professional resumes quickly.Ideal for job seekers for a polished resume",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "Online Resume Builder-Perfect Resumes!",
    },
    {
      id: 4,
      title: "TextUtil-Text Manipulation Tool!",
      des: "Discover the power of effortless text manipulation with TextUtilApp, a versatile webapp to simplify text editing tasks.",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "TextUtil-Automate text transformations.",
    },
  ];
  
  export const testimonials = [
    
    {
      quote:"I completed my 10th grade at DAV, where I not only excelled academically but also demonstrated my multitasking abilities by being elected class captain for both 9th and 10th grades. My deep understanding of mathematical concepts, combined with a passion for technology, led me to experiment with creating games using Python in our computer labs. It was during this time that I realized my true calling and decided to pursue a future in Information Technology.",
      name: "High School (Class 10th)",
      title: "DAV Centenary Public School-92.8%",
    },
    {
      quote:
        "I completed my education from DAV Centenary Public School, excelling in the PCEM stream with an impressive 94%. During this time, I was introduced to Information Technology, which sparked a profound interest in the field of UI/UX design and development. This early fascination ultimately inspired me to pursue a degree in Computer Science Engineering, where I continue to cultivate my passion for creating innovative and user-centric digital experiences.",
      name: "Pre-University (Class 12th)",
      title: "DAV Centenary Public School-94%",
    },
    {
      quote:"Aspiring UI/UX developer with three years of experience, evolving from Hello World! to building complex websites and web apps. Skilled in ReactJS, HTML, CSS, and JavaScript, with strong SQL integration. Experienced in applying DSA for efficient solutions, participating in hackathons, and excelling in core computer science principles. Analytical, detail-oriented, and dedicated to creating user-centric designs.",
      name: "Bachelors in Computer Science Engineering ",
      title: "Chandigarh University-8.37 CGPA (till 6th sem)",
    },
  
    
  ];
  
  export const companies = [
    {
      id: 1,
      // name: "Leadership",
      img: "/cloud.svg",
      // nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      // name: "Adaptability",
      img: "/app.svg",
      // nameImg: "/appName.svg",
    },
    {
      id: 3,
      // name: "Collaboration",
      img: "/host.svg",
      // nameImg: "/hostName.svg",
    },
    {
      id: 4,
      // name: "Constructive feedback",
      img: "/s.svg",
      // nameImg: "/streamName.svg",
    },
    {
      id: 5,
      // name: " Analytical Proficiency",
      img: "/dock.svg",
      // nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: " HACK-O-OCTO Winner",
      desc: "Agriculture track winner of HACK-O-OCTO 36hrs hackathon(GDSC).",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Reasearch Paper",
      desc: "Published Research paper on Virtual mouse using hand gestures.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: " CSI Star award winner",
      desc: "CSI star award winner 2023-24 of Computer Society of India,Chandigarh",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "NPTEL Certifications",
      desc: " Discrete Mathematics,IOT (gold) ,Probability and stats from NPTEL  and data mining",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];