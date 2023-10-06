import Link from "next/link";
import React, { useEffect, useState } from "react";

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://github.com/SuyashOP-2")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer>
      <Link
        href="https://github.com/SuyashOP-2"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Designed and Built by Suyash Shirtar</span>
        {githubInfo && (
          <div className="footer-git">
          </div>
        )}
      </Link>
    </footer>
  );
}

export default Footer;
