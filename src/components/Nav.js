import React, { useEffect, useState } from "react";
import "../scss/Nav.css";

function Nav() {
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHasScroll(window.scrollY > 100);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${hasScroll ? "nav-scroll" : ""}`}>
      <img
        className="nav-logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix logo"
      />

      <img
        className="nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
