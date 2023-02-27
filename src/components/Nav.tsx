"use client";
import React from "react";
import styles from "./css/Nav.module.css";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { SiPowerbi } from "react-icons/si";
import { RiMapFill, RiToolsFill } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";
import Link from "next/link";
type Props = {
  activeSection: string;
};

const Links = [
  {
    id: "main",
    href: "#main",
    icon: <BiHomeAlt />,
  },
  {
    id: "about",
    href: "#about",
    icon: <BsFillPersonFill />,
  },
  {
    id: "services",
    href: "#services",
    icon: <RiToolsFill />,
  },
  {
    id: "work",
    href: "#work",
    icon: <RiMapFill />,
  },
  {
    id: "contact",
    href: "#contact",
    icon: <FiMessageCircle />,
  },
];

function onClick(id: string) {
  let element = document.getElementById(id);
  if (element) {
    element.scrollIntoView();
  }
}

export default function Nav(props: Props) {
  const [active, setActive] = React.useState(props.activeSection ?? "main");
  React.useEffect(() => {
    setActive(() => props.activeSection);
  }, [props.activeSection]);

  return (
    <nav>
      <ul className={styles.sideBar}>
        {Links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                className={active === link.id ? styles.active : ""}
                href={link.href}
                onClick={() => {
                  onClick(link.id);
                  setActive(() => link.id);
                }}
              >
                {link.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
