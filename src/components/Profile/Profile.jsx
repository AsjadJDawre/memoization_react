import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <h1 className="profile-name">John Doe</h1>
        <p className="profile-title">Software Developer</p>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2>About Me</h2>
          <p>Passionate developer with expertise in modern web technologies. Always learning and exploring new possibilities in the digital world.</p>
        </div>

        <div className="profile-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">React</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">HTML/CSS</div>
            <div className="skill-card">Node.js</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
