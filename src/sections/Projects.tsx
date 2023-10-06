import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Movix",
      projectLink: "https://watchmovix.netlify.app/",
      projectTech: [
        "React",
        "Redux Toolkit",
        "MongoDB",
        "Nodejs",
        "CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/SuyashOP-2/Movix",
        externalLink: "https://watchmovix.netlify.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Property Finder",
      projectLink: "https://netlify.com",
    
      projectTech: [
        "React",
        "Node.js",
        "MongoDB",
        
      ],
      projectExternalLinks: {
        github: "https://github.com/SuyashOP-2/Property_Web_App",
        externalLink: "https://refinedashyo.netlify.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "Youtube App",
        externalLink: "https://youtube-clone-psi-orpin.vercel.app",
        projectLink: "",
    
      projectTech: [
        "React",
        "API",
        "Tailwind CSS",
        "Youtube API",
        
        
      
      ],
      projectExternalLinks: {
        github: "https://github.com/SuyashOP-2/YoutubeClone",
        externalLink: "https://youtube-clone-psi-orpin.vercel.app",
      },
    },
    {
      image: "/project4.png",
      projectName: "Giphy",
        externalLink: "https://giphy-suyashop-2.vercel.app",
        projectLink: "https://giphy-suyashop-2.vercel.app",
 
      projectTech: [
        "React",
        "Node.js",
        "Firebase",
        "MongoDB",
        "Express",
        "Redux Toolkit",
      ],
      projectExternalLinks: {
        github: "https://github.com/SuyashOP-2/GIPHY",
        externalLink: "https://giphy-suyashop-2.vercel.app",
      },
    },
    {
      image: "/project5.png",
      projectName: "Tesla Clone",
        externalLink: "elontesla.netlify.app/",
        projectLink: "elontesla.netlify.app/",

      projectTech: [
        "React js",
        "Tailwind CSS",
        "Material UI",
        
      ],
      projectExternalLinks: {
        github: "https://github.com/SuyashOP-2/GIPHY",
        externalLink: "https://elontesla.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
   
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        
                        className="project-info-links-item-link" 
                     
                      >
                        <FiGithub />
                        {/* <p>Code</p> */}
                      </Link>
                      <p>Code</p>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                      <p>Demo</p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
