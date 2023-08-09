import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const handleScrollListerner = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollListerner);
    return () => {
      window.removeEventListener("scroll", handleScrollListerner);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
        className="nav_logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User Avatar"
        className="nav_avatar"
      />
    </div>
  );
}

export default Nav;
