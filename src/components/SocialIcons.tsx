import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
 
  
} from "react-icons/fi";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://github.com/SuyashOP-2" },
    
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/suyash-shirtar-55955a1b8/",
    },

    {
      name: "Leetcode",
      icon: <  SiLeetcode />,
      link: "https://leetcode.com/suyash_5050/",
    },
    {
      name: "Geeksforeeks",
      icon: < SiGeeksforgeeks />,
      link: "https://auth.geeksforgeeks.org/user/suyashsshirtar2/",
    },
    {
      name: "Geeksforeeks",
      icon: <  FiInstagram />,
      link: "https://auth.geeksforgeeks.org/user/suyashsshirtar2/",
    },

  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
