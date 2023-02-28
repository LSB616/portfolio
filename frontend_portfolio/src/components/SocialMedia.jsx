import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://twitter.com/">
    <div>
      <BsTwitter />
    </div>
    </a>
    <a href="https://en-gb.facebook.com/">
    <div>
      <FaFacebookF />
    </div>
    </a>
    <a href="https://www.instagram.com/">
    <div>
      <BsInstagram />
    </div>
    </a>
  </div>
);

export default SocialMedia;