import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/lewisbotcherby/">
    <div>
      <FaLinkedin />
    </div>
    </a>
    <a href="https://github.com/LSB616">
    <div>
      <FaGithub />
    </div>
    </a>
  </div>
);

export default SocialMedia;