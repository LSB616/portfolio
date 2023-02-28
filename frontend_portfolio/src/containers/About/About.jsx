import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../Wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text" id='abouth2'>About <span>Me</span></h2>
      <p className='p-text'>A recent graduate of the Northcoders coding course, this unmissable
opportunity offered a chance to restart my career and correct a ten-year-
old regret of not pursuing computer science and coding when the spark
of interest first occurred during my undergraduate degree while studying
bioinformatics.
The creative freedom afforded by coding as well as the challenges and new
skills to learn at every turn have only underlined coding’s appeal to me. A
previous career in science publishing has provided a wide range of
transferable skills, including editing techniques and the ability to take a
project from the idea stage to a fully formed product. I am seeking a
challenging role where I can utilise my new skills and continue to learn and
grow.</p>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);