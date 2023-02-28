import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/lewisbotcherby/" target="_blank" rel="noreferrer">
    <div>
      <FaLinkedin />
    </div>
    </a>
    <a href="https://github.com/LSB616" target="_blank" rel="noreferrer">
    <div>
      <FaGithub />
    </div>
    </a>
  </div>
);

export default SocialMedia;