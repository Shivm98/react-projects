import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data";
import "./Navigation.css";

const Navigation = () => {
  const [navSolid, setNavSolid] = useState(false);
  const getScroll = () => {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight >= 90) {
      setNavSolid(true);
    } else {
      setNavSolid(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", getScroll);

    // Clean up
    return () => {
      document.removeEventListener("scroll", getScroll);
    };
  }, []);

  return (
    <nav className={navSolid ? "nav solid" : "nav"}>
      <div className="navbar-center">
        <div className="logo">Logo</div>
        <ul className="nav-list">
          {data.map((link, index) => (
            <li className="nav-item" key={index}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
