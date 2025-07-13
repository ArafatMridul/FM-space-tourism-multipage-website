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
                    <li>
                        <NavLink to="/">
                            <span>00</span> <p>home</p>
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
            </div>
        </header>
    );
    // return (
    //     // <header className="text-white w-full bg-red-200 fixed">
    //     //     <nav className="absolute left-6 right-0 top-6 sm:left-10 xl:left-16 xl:top-16 flex items-center justify-between z-[999]">
    //     //         <NavLink to="/" className="mr-10 shrink-0">
    //     //             <img
    //     //                 src={logo}
    //     //                 alt="logo"
    //     //                 className="h-10 w-10 sm:h-12 sm:w-12"
    //     //             />
    //     //         </NavLink>
    //     //         <button onClick={handleOpen} className="block sm:hidden pr-6">
    //     //             <img
    //     //                 src={isOpen ? close : hamburger}
    //     //                 alt={isOpen ? "close" : "menu-icon"}
    //     //                 className={`${isOpen && "h-6 w-[21px]"}`}
    //     //             />
    //     //         </button>
    //     //         <ul
    //     //             className={`${styles.NavLink} hidden sm:flex preset-8 gap-12 pr-6 sm:pr-10 xl:pr-16`}
    //     //         >
    //     //             <div className="absolute backdrop-blur-2xl right-0 left-[10%] md:left-[20%] xl:left-[40%] sm:-top-[24px] h-[96px] bg-white/5 -z-[100]"></div>
    //     //             <div className="absolute max-xl:hidden left-[8%] right-[58%] mt-4 h-[1px] bg-white/20"></div>
    //     //             <li>
    //     //                 <NavNavLink to="/" className="flex items-center gap-3">
    //     //                     <span className="font-bold sm:hidden xl:block">00</span>
    //     //                     <p className="uppercase">home</p>
    //     //                 </NavNavLink>
    //     //             </li>
    //     //             <li>
    //     //                 <NavNavLink
    //     //                     to="destination"
    //     //                     className="flex items-center gap-3"
    //     //                 >
    //     //                     <span className="font-bold">01</span>
    //     //                     <p className="uppercase">destination</p>
    //     //                 </NavNavLink>
    //     //             </li>
    //     //             <li>
    //     //                 <NavNavLink to="crew" className="flex items-center gap-3">
    //     //                     <span className="font-bold">02</span>
    //     //                     <p className="uppercase">crew</p>
    //     //                 </NavNavLink>
    //     //             </li>
    //     //             <li>
    //     //                 <NavNavLink
    //     //                     to="technology"
    //     //                     className="flex items-center gap-3"
    //     //                 >
    //     //                     <span className="font-bold">03</span>
    //     //                     <p className="uppercase">technology</p>
    //     //                 </NavNavLink>
    //     //             </li>
    //     //         </ul>
    //     //     </nav>
    //     //     <div
    //     //         className={`fixed top-0 bottom-0 right-0 w-[67.73%] backdrop-blur-xl bg-white/5 transition-transform duration-300 z-[100] ${
    //     //             isOpen ? "translate-x-0" : "translate-x-full"
    //     //         }`}
    //     //     >
    //     //         <ul className={`${styles.slidebar} flex flex-col pl-8 pt-[136px] gap-8 preset-8`}>
    //     //             <li>
    //     //                 <NavNavLink to="/" className="flex items-center gap-3">
    //     //                     <span className="font-bold">00</span>
    //     //                     <p className="uppercase">home</p>
    //     //                 </NavNavLink>
    //     //             </li>
    //     //             <li>
    //     //                 <NavNavLink
    //     //                     to="destination"
    //     //                     className="flex items-center gap-3"
    //     //                 >
    //     //                     <span className="font-bold">01</span>
    //     //                     <p className="uppercase">destination</p>
    //     //                 </NavNavLink>
    //     //             </li>
    //     //             <li>
    //     //                 <NavNavLink to="crew" className="flex items-center gap-3">
    //     //                     <span className="font-bold">02</span>
    //     //                     <p className="uppercase">crew</p>
    //     //                 </NavNavLink>
    //     //             </li>
    //     //             <li>
    //     //                 <NavNavLink
    //     //                     to="technology"
    //     //                     className="flex items-center gap-3"
    //     //                 >
    //     //                     <span className="font-bold">03</span>
    //     //                     <p className="uppercase">technology</p>
    //     //                 </NavNavLink>
    //     //             </li>
    //     //         </ul>
    //     //     </div>
    //     // </header>
    // );
}

export default Navbar;
