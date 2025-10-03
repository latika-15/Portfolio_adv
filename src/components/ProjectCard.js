import React from 'react';

const ProjectCard = ({ 
  type, 
  title, 
  description, 
  technologies = [], 
  features = [], 
  imageUrl, 
  layout = 'image-right' 
}) => {
  return (
    <div className={`project-card ${layout}`}>
      {/* Content Section */}
      <div className="project-content">
        <div className="project-details">
          <p className="project-type">{type}</p>
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          
          {/* Technologies Section */}
          {technologies && technologies.length > 0 && (
            <div className="technologies-section">
              <h4>Technologies Used:</h4>
              <div className="tech-tags">
                {technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
          
          {/* Features Section */}
          {features && features.length > 0 && (
            <div className="features-section">
              <h4>Key Features:</h4>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="project-sparkle">✨</div>
        </div>
      </div>

      {/* Image Section */}
      <div className="project-image-container">
        <img src={imageUrl} alt={title} className="project-image" />
       
      </div>
    </div>
  );
};

export default ProjectCard;