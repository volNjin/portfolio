import { navLinks } from "../../constants";
import { useState } from "react";
import "./NavBar.css";
import { useNavigate, useLocation } from "react-router-dom";
const NavBar = () => {
  const pathname = useLocation().pathname.split("/")[1];
  console.log(pathname);
  const [active, setActive] = useState<string>(pathname);
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    setActive(id);
    navigate(id);
  };
  return (
    <section className="fixed-backdrop">
      <div className="container">
        <ul className="navLinks">
          {navLinks.map(({ title, id }) => (
            <li
              key={id}
              className={`link-btn ${active === id ? "active" : ""}`}
              onClick={() => handleClick(id)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
