import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
// import styles from "./Navbar.module.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        setIsOpen((curr) => !curr);
    }
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between">
            <div className="line absolute h-[1px] w-[38%] bg-white/25 left-[12%] z-[999]"></div>
            <Link to="/">
                <img
                    className="logo"
                    src={logo}
                    alt="home logo"
                    width="40px"
                    height="40px"
                />
            </Link>
            <button onClick={handleOpen} className="cursor-pointer">
                <img
                    className={isOpen ? "h-6 w-[21px]" : "w-6 h-[21px]"}
                    src={isOpen ? close : hamburger}
                    alt={isOpen ? "close" : "menu-icon"}
                />
            </button>
            <nav className={`nav backdrop-blur-lg bg-white/5`}>
                <ul className="links flex items-center gap-12">
                    <li>
                        <NavLink to="/">
                            <span className="md:hidden lg:block">00</span>{" "}
                            <p>home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="destination">
                            <span>01</span> <p>destination</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="crew">
                            <span>02</span> <p>crew</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="technology">
                            <span>03</span> <p>technology</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div
                className={`slidebar backdrop-blur-lg bg-white/5 ${
                    isOpen ? "left-[32.27%]" : "left-[100%]"
                } transition-[left] duration-300`}
            >
                <ul className="slidebarLinks">
                    <li onClick={handleOpen}>
                        <NavLink to="/">
                            <span>00</span> <p>home</p>
                        </NavLink>
                    </li>
                    <li onClick={handleOpen}>
                        <NavLink to="destination">
                            <span>01</span> <p>destination</p>
                        </NavLink>
                    </li>
                    <li onClick={handleOpen}>
                        <NavLink to="crew">
                            <span>02</span> <p>crew</p>
                        </NavLink>
                    </li>
                    <li onClick={handleOpen}>
                        <NavLink to="technology">
                            <span>03</span> <p>technology</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
