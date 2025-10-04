import React from 'react';
import ProjectCard from './ProjectCard'; 
import { projectImages } from './imageMap';

const projectsData = [
  {
    type: 'Minor Project',
    title: 'TechVision',
    description: `TechVision is a comprehensive web-based platform designed to help
                  students build successful technical careers through structured
                  learning and career planning. The platform offers semester-wise
                  roadmaps, personalized resource recommendations, certification
                  tracking, and automated resume generation, along with real-time
                  updates on internships, hackathons, and job opportunities.`,
    technologies: ['HTML', 'CSS', 'JS', 'SQL','PHP'],
    features: ['Semester-wise Roadmaps', 'Certification Tracking', 'Resume Builder', 'Job Alerts', 'Progress Tracking'],
    status: 'Completed',
    imageKey: 'techvision',
    live_link: 'https://latika-15.github.io/TechVision/', // Use key instead of direct URL
  },
  {
    type: 'Dashboard',
    title: 'Home Energy',
    description: `Designed an interactive Home Energy Usage Dashboard in Figma to
                  visualize household energy consumption across appliances like
                  ceiling fans, refrigerators, washing machines, air conditioners,
                  and geysers. The dashboard provides real-time insights through
                  graphical reports, including a month-wise usage chart, energy-
                  saving tips, and appliance-wise consumption breakdown using pie
                  charts.`,
    technologies: ['Figma', 'UI/UX Design', 'Data Visualization','Wireframing'],
    features: ['Real-time Analytics', 'Energy Consumption Reports', 'Usage Tips', 'Appliance-wise Tracking'],
    status: "Design completed",
    imageKey: 'dashboard',
    live_link: 'https://www.figma.com/proto/OCWDFodYy6bjsiTrGkvQSc/Untitled?page-id=0%3A1&node-id=54-10&viewport=37%2C67%2C0.76&t=PyfpwvJ82HcxyXVo-1&scaling=scale-down&content-scaling=fixed' // Use key instead of direct URL
  }
];

const simpleProjectsData = [
  {
    type: 'Project',
    title: 'Solar System Animation',
    description: `Created an interactive Solar System model using only HTML and CSS animations. 
                  The project demonstrates planetary orbits, rotation, and relative positioning 
                  of planets around the sun. It visually explains the solar system dynamics 
                  with smooth, responsive animations and an engaging UI.`,
    imageKey: 'solar',
    live_link: 'https://latika-15.github.io/solar-system/',
  },
  {
    type: 'Mini Project',
    title: 'Tic Tac Toe Game',
    description: `Developed a classic Tic Tac Toe game using HTML, CSS, and JavaScript. 
                  The game allows two players to compete in real-time, highlighting winning 
                  combinations and preventing invalid moves.`,
    imageKey: 'tictac',
    live_link:'https://latika-15.github.io/Tic-Tac-Toe/',
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className="projects-main-title">Projects</h2>
      
      {/* Detailed Projects with Zigzag Layout */}
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index} 
            type={project.type}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            features={project.features}
            imageUrl={projectImages[project.imageKey]} // Get URL from mapping
            layout={index % 2 === 0 ? 'image-right' : 'image-left'}
            live_link={project.live_link} // Pass live_link prop
          />
        ))}
      </div>

      {/* Simple Projects Section */}
      <div className="simple-projects-section">
        <h3 className="simple-projects-title">Other Projects</h3>
        <div className="simple-projects-grid">
          {simpleProjectsData.map((project, index) => (
            <div key={index} className="simple-project-card">
              <div className="simple-project-image-container">
                <img 
                  src={projectImages[project.imageKey]} // Get URL from mapping
                  alt={project.title} 
                  className="simple-project-image"
                />
              </div>
              <div className="simple-project-info">
                <span className="simple-project-type">{project.type}</span>
                <h4 className="simple-project-title">{project.title}</h4>
                <p className="simple-project-description">{project.description}</p>
                   <button 
              onClick={() => window.open(live_link, "_blank")}
              className="live-demo-btn project-card-demo-btn"
            >
              Live Demo
            </button>
          

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;