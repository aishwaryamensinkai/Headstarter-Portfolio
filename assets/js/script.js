let timelineElements = [
  {
    id: 1,
    title: "Summer Program Assistant",
    company: "Syracuse University",
    type: "Part-Time On Campus",
    location: "Syracuse, New York, USA",
    description:
      "Interacted with 500+ students in a residential setting, resolved over 100 concerns daily, leading to a 30% increase in resident satisfaction. Led initiatives, enhanced adaptability and leadership, boosted community engagement by 20%, and reduced security incidents by 30%.",
    date: "June 2023 - August 2023 • 3 mos",
    image: "syracuse.png",
  },
  {
    id: 2,
    title: "Co-op Program Student Employee as Web Developer",
    company: "Associated Gastroenterologists of CNY, PC",
    type: "Part-Time (CASE Co-op Program)",
    location: "Syracuse, New York, USA",
    description:
      "Revamped the Associated Gastroenterologists of CNY, PC website with WordPress, enhancing UI/UX and increasing session duration by 25% while reducing bounce rate by 15%. Created tailored pages that boosted organic traffic by 30% and appointment requests by 20%. Achieved a 95% stakeholder satisfaction rating through close collaboration and seamless integration of new features.",
    date: "November 2022 - June 2023 • 8 mo",
    image: "syracuse.png",
  },
  {
    id: 3,
    title: "Maters in Computer Science",
    company: "Syracuse University",
    type: "Part-Time (CASE Co-op Program)",
    location: "Syracuse, New York, USA",
    description:
      "Coursework: Mobile Application Programming, Design and Analysis of Algorithms, Database Management System, Computer Architecture, Social Media and Data Mining, Data Analysis And Decision Test, Operating Systems, Object Oriented Design, Intro to Machine Learning & Algorithms",
    date: "November 2022 - June 2023 • 8 mo",
    image: "syracuse.png",
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Anicca Data Science Solutions",
    type: "Full-Time",
    location: "Bangalore, Karnataka, India",
    description:
      "Spearheaded the overhaul of McDonald's RFM application, boosting user engagement by 55% through Angular, HTML, CSS, and TypeScript. Modernized restaurant profiles, resulting in a 40% improvement in performance and scalability. Collaborated with cross-functional teams to ensure 100% user input validation and a 50% reduction in bugs.",
    date: "March 2022 - July 2022 • 5 mos",
    image: "anicca.png",
  },
  {
    id: 5,
    title: "Engineer-Trainee",
    company: "Pelatro Solutions Private Limited",
    type: "Full-Time",
    location: "Bangalore, Karnataka, India",
    description:
      "Revised mViva product performance with cutting-edge algorithms, leading to a 20% increase in offer retrieval efficiency from customer call data. Translated requirements into robust test solutions, executing Java-based plans to resolve issues, accomplishing a 95% reduction in post-release bugs. Participated in achieving 100% test coverage through requirement analysis and collaboration, ensuring seamless product functionality.",
    date: "August 2021 - February 2022 • 7 mos",
    image: "pelatro.png",
  },
  {
    id: 6,
    title: "Web Development Intern",
    company: "Felicity",
    type: "Internship",
    location: "Jaipur, Rajasthan, India",
    description:
      "Migrated code from AngularJS to Angular 7, reviewed designed wireframes on Figma, and analyzed requirements to build reusable components and libraries. Integrated front-end and back-end systems with a 98% error-free loading rate. Accomplished specialized features (Video, Audio, and Chat Sessions) for Mental Health Counseling.",
    date: "April 2021 - July 2021 • 4 mos",
    image: "felicity.jpeg",
  },
  {
    id: 7,
    title: "Bachelor of Science in Computer Science",
    company: "KLE Technological University",
    type: "Full-time",
    location: "Hubballi, Karnataka, India",
    description:
      "Coursework: Data Structures, Databases, Web Development, Computer Architecture, Database Management System, Computer Architecture, Data Mining and Analysis, Data Analysis And Decision Test, Operating Systems, Object-Oriented Design, Intro to Machine Learning & Algorithms,",
    date: "August 2017 - June 2021 • 4 yrs",
    image: "kle.png",
  },
  {
    id: 8,
    title: "Intern",
    company: "Transil.Inc",
    type: "part-time",
    location: "Hubballi, Karnataka, India",
    description:
      "Presented a robust Hotel Management database model with integrated data flows and a functional prototype, earning university accolades. Engineered a dynamic web application using Angular, Node.js, Express.js, and MongoDB, boosting user engagement by 45%. Directed a team in using Figma for wireframes and designs, enhancing client input assessment and increasing project efficiency by 60%.",
    date: "January 2019 - May 2019 • 5 months",
    image: "transil.png",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("timeline-container");

  timelineElements.forEach((element, index) => {
    const item = document.createElement("div");
    item.className = `timeline-item ${index % 2 === 0 ? "left" : "right"}`;

    item.innerHTML = `
      <div class="timeline-item-content ${index % 2 === 0 ? "left" : "right"}">
        <img src="images/${element.image}" alt="${
      element.company
    }" class="timeline-image" />
        <h3>${element.title}</h3>
        <h4>${element.company} - ${element.type}</h4>
        <p><strong>Location:</strong> ${element.location}</p>
        <p><strong>Date:</strong> ${element.date}</p>
        <p>${element.description}</p>
      </div>
      <div class="clearfix"></div>
    `;

    container.appendChild(item);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cloudContainer = document.getElementById("tag-cloud");
  const texts = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Node.js",
    "Flutter",
    "Firebase",
    "RESTful APIs",
    "GraphQL",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Git",
    "Docker",
    "AWS",
    "Java",
    "C++",
    "Python",
    "SwiftUI",
    "Sass",
    "Bootstrap",
    "SQL",
    "RxJs",
    "C",
    "Splunk",
    "Linux",
    "Windows",
    "Mac OS",
  ];

  const options = {
    radius: 350,
    maxSpeed: "normal",
    initSpeed: "fast",
    direction: 135,
    keep: true,
  };

  TagCloud(cloudContainer, texts, options);
});

const projectsData = [
  {
    title: "Brooklyn Stoop Sale",
    image: "sale",
    link: "https://aishwaryamensinkai.github.io/Brooklyn-Stoop/",
    source: "https://github.com/aishwaryamensinkai/Brooklyn-Stoop",
  },
  {
    title: "TMDB Movies",
    image: "movie",
    link: "https://aishwaryamensinkai.github.io/tmdb-Movies/#/",
    source: "https://github.com/aishwaryamensinkai/tmdb-Movies",
  },
  {
    title: "Terminal Portfolio",
    image: "terminal",
    link: "https://aishwaryamensinkai.github.io/Terminal-Portfolio/",
    source: "https://github.com/aishwaryamensinkai/Terminal-Portfolio",
  },
  {
    title: "Github Readme",
    image: "readme",
    link: "https://github.com/aishwaryamensinkai",
    source: "https://github.com/aishwaryamensinkai/aishwaryamensinkai",
  },
  {
    title: "FlickerImages",
    image: "flicker",
    link: "https://aishwaryamensinkai.github.io/FlickrImages/firstpage",
    source: "https://github.com/aishwaryamensinkai/FlickrImages",
  },
  {
    title: "Fitness App",
    image: "fitness",
    link: "https://aishwaryamensinkai.github.io/Fitness-App/",
    source: "https://github.com/aishwaryamensinkai/Fitness-App",
  },
  {
    title: "VCall",
    image: "vcall",
    link: "https://aishwaryamensinkai.github.io/Video-Call/",
    source: "https://github.com/aishwaryamensinkai/Video-Call",
  },
  {
    title: "Abhishek`s Portfolio",
    image: "ap",
    link: "https://prasunabhi.github.io/Portfolio/",
    source: "https://github.com/aishwaryamensinkai/AP-Portfolio",
  },
  {
    title: "Karthik`s Portfolio",
    image: "kp",
    link: "https://kenni001.github.io/Personal_Portfolio/",
    source: "https://github.com/aishwaryamensinkai/Kportfolio",
  },
  {
    title: "Weather Application",
    image: "weatherapp",
    link: "https://aishwaryamensinkai.github.io/Weather-Application/",
    source: "https://github.com/aishwaryamensinkai/Weather-Application",
  },
  {
    title: "Notes App",
    image: "notesapp",
    link: "https://aishwaryamensinkai.github.io/Notes-App/",
    source: "https://github.com/aishwaryamensinkai/Notes-App",
  },
  {
    title: "Expense Tracker",
    image: "expensetracker",
    link: "https://aishwaryamensinkai.github.io/Expense-Tracker/",
    source: "https://github.com/aishwaryamensinkai/Expense-Tracker",
  },
  {
    title: "TradeMaster",
    image: "trademaster",
    source: "https://github.com/aishwaryamensinkai/TradeMaster",
  },
  {
    title: "Predicting Response Time of Paris Fire Brigade Vehicles",
    image: "dma",
    source: "https://github.com/aishwaryamensinkai/Data-Mining-and-Analysis",
  },
];

document
  .getElementById("checkout-projects")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.style.display = "grid";
    projectsContainer.innerHTML = projectsData
      .slice(0, 5)
      .map(
        (project) => `
    <div class="project">
      <h3>${project.title}</h3>
      <div class="buttons">
        <a href="${project.link}" target="_blank" class="btn live-demo">Live Demo</a>
        <a href="${project.source}" target="_blank" class="btn source-code">Source Code</a>
      </div>
    </div>
  `
      )
      .join("");
  });

emailjs.init("t9u-bNa8nPhSk2YkO");
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_o5tzkrv", "template_163h6lo", this).then(
      function () {
        alert("Message successfully sent!");
        document.getElementById("contact-form").reset();
      },
      function () {
        alert("Failed to send the message, please try again");
      }
    );
  });
