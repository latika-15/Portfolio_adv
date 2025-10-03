import React from 'react';
// No specific CSS import needed here if you're using index.css globally

const skillsList = [
  'Canva', 'HTML', 'CSS',
  'JavaScript', 'Figma', 'Python',
  'C/C++', 'SQL', 'Git'
];

const Skills = () => {
  return (
    // 'skills-section' is the main container class
    <section className="section" id="skills">
      <h2 className='title'>Skills</h2>
      <p style={{"marginBottom":"30px"}}>
        A Frontend Developer and Graphic Designer who loves turning ideas into interactive, eye-catching experiences. My work combines code and creativity to deliver designs that both look good and works seamlessly.
      </p>

      {/* 'skills-grid' arranges the cards */}
      <div className="skills-grid">
        {skillsList.map((skill) => (
          // 'skill-card' is the class for the glowing purple box
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
       <img src={new URL("../assets/skills.png", import.meta.url)} alt="skills" className="skill-img" />
    </section>
  );
};

export default Skills;