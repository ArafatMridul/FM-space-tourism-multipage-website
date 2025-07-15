import React, { useState } from "react";

import crewBgDesktop from "../../assets/crew/background-crew-desktop.jpg";
import crewBgTablet from "../../assets/crew/background-crew-tablet.jpg";
import crewBgMobile from "../../assets/crew/background-crew-mobile.jpg";

import { crew } from "../../../data/data.json";

function Crew() {
    const [value, setValue] = useState(0);

    const { name, images, role, bio } = crew[value];

    return (
        <div className="wrapper crew">
            <picture className="image">
                <source
                    media="(min-width:1100px)"
                    srcSet={crewBgDesktop}
                    width="1440px"
                    height="900px"
                />
                <source
                    media="(min-width:700px)"
                    srcSet={crewBgTablet}
                    width="768px"
                    height="2048px"
                />
                <img
                    src={crewBgMobile}
                    alt="crew background"
                    width="375px"
                    height="710px"
                />
            </picture>

            <div className="crew_hero">
                <div className="upper">
                    <div>
                        <h3>
                            <span>02</span> meet your crew
                        </h3>
                    </div>
                    <div className="content">
                        <div className="description">
                            <h2>{role}</h2>
                            <h1>{name}</h1>
                            <p>{bio}</p>
                        </div>
                        <div>
                            <ul className="dots">
                                {crew.map((member, index) => (
                                    <li
                                        className={`rounded-full  cursor-pointer ${
                                            value === index
                                                ? "bg-white"
                                                : "bg-white/20 hover:bg-white/55"
                                        } transition-all duration-300`}
                                        key={index}
                                        onClick={() => setValue(index)}
                                    ></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="lower">
                    <img src={images.webp} alt={name} />
                </div>
            </div>
        </div>
    );
}

export default Crew;
