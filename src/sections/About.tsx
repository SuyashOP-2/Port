import Image from "next/image";import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Suyash, and I am passionate about creating
            digital content for the web. My interest in web development was
            sparked in 2016 when I created my first project called Lavish, a
            social media app built using React and Node.js.
          </p>
          <p className="about-grid-info-text">
          Currently I am a 3 year student at DY. Patil College of Engineering, Pune.
          </p>
          <p className="about-grid-info-text">
          When I am not smashing the keyboard, you will find me playing Cricket, going on treks, or Plaiying Games.
          </p>
          </div>
          <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/kishan.jpeg" alt="profile" fill />
          </div>
        </div> 

      </div>

      <div className="skills-section" style={{paddingBottom: "100px"}}>
  <h2 className="about-grid-info-text">Skills</h2>
  <div className="skills-grid">
    <div className="about-grid-info-text">
      <img src="/reactjs.png" alt="React icon" />
      <p>React</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/redux.png" alt="Redux Toolkit icon" />
      <p>Redux</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/html.png" alt="HTML icon" />
      <p>HTML</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/typescript.png" alt="TypeScript icon" />
      <p>TypeScript</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/firebase.png" alt="Firebase icon" />
      <p>Firebase</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/node.png" alt="Node.js icon" />
      <p>Node.js</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/javascript.png" alt="JavaScript icon" />
      <p>JavaScript</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/css.png" alt="CSS icon" />
      <p>CSS</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/mongodb.png" alt="MongoDB icon" />
      <p>MongoDB</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/git.png" alt="Git icon" />
      <p>Git</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/bootstrap.png" alt="Bootstrap icon" />
      <p>Bootstrap</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/Threejs.png" alt="Bootstrap icon" />
      <p>three js</p>
    </div>

    <div className="about-grid-info-text">
      <img src="/mysql.png" alt="MySQL icon" />
      <p>MySQL</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/python.png" alt="Python icon" />
      <p>Python</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/postman.png" alt="Postman icon" />
      <p>Postman</p>
    </div>
    <div className="about-grid-info-text">
      <img src="/cpp.png" alt="Postman icon" />
      <p>C++</p>
    </div>
    
  </div>
</div>

    </motion.div>
  );
}

export default About;
