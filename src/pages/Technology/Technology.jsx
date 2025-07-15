import React, { useState } from "react";

import technologyBgDesktop from "../../assets/technology/background-technology-desktop.jpg";
import technologyBgTablet from "../../assets/technology/background-technology-tablet.jpg";
import technologyBgMobile from "../../assets/technology/background-technology-mobile.jpg";

import { technology } from "../../../data/data.json";

function Technology() {
    const [value, setValue] = useState(0);

    const { name, images, description } = technology[value];

    return (
        <div className="technology">
            <picture className="tech_image">
                <source
                    media="(min-width:1100px)"
                    srcSet={technologyBgDesktop}
                    width="1440px"
                    height="900px"
                />
                <source
                    media="(min-width:700px)"
                    srcSet={technologyBgTablet}
                    width="768px"
                    height="1024px"
                />
                <img
                    src={technologyBgMobile}
                    alt="technology background"
                    width="375px"
                    height="710px"
                    className="h-full w-full"
                />
            </picture>
            <div className="tech_hero">
                <div className="wrapper">
                    <h3>
                        <span>03</span> space launch 101
                    </h3>
                </div>
                <div className="wrapper des">
                    <div className="desk">
                        <div className="spaceship_img">
                            <picture>
                                <source
                                    media="(min-width:1100px)"
                                    srcSet={images.portrait}
                                />
                                <source
                                    media="(min-width:700px)"
                                    srcSet={images.landscape}
                                />
                                <img src={images.portrait} alt="spaceships" />
                            </picture>
                        </div>
                        <div className="opp tab">
                            <div className="opps_container">
                                <ul className="options">
                                    {technology.map((item, index) => (
                                        <li
                                            className={`option cursor-pointer rounded-full border ${
                                                value === index
                                                    ? "bg-white text-[#0b0d17] border-white"
                                                    : "border-white/5 hover:border-white/100"
                                            } transition-all duration-300`}
                                            onClick={() => setValue(index)}
                                            key={index}
                                        >
                                            <h4>{index + 1}</h4>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tab names">
                                <h2>the terminology...</h2>
                                <h1>{name}</h1>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technology;
