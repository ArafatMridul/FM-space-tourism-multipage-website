import React, { useEffect, useState } from "react";

import destinationBgDesktop from "../../assets/destination/background-destination-desktop.jpg";
import destinationBgTablet from "../../assets/destination/background-destination-tablet.jpg";
import destinationBgMobile from "../../assets/destination/background-destination-mobile.jpg";
import { destinations } from "../../../data/data.json";

function Destination() {
    const [selectedId, setSelectedId] = useState(0);

    const { name, images, description, distance, travel } =
        destinations[selectedId];

    return (
        <div className="wrapper destination">
            <picture className="image">
                <source
                    media="(min-width:1100px)"
                    srcSet={destinationBgDesktop}
                    width="1440px"
                    height="900px"
                />
                <source
                    media="(min-width:700px)"
                    srcSet={destinationBgTablet}
                    width="768px"
                    height="1024px"
                />
                <img
                    src={destinationBgMobile}
                    alt="home background"
                    width="375px"
                    height="850px"
                />
            </picture>
            <div className="desti_hero">
                <div className="upper">
                    <h2>
                        <span>01</span> pick your destination
                    </h2>
                    <div>
                        <img
                            src={images?.webp}
                            alt="moon"
                            className="planetImg"
                        />
                    </div>
                </div>
                <div className="middle">
                    <div>
                        <ul className="flex items-center justify-center gap-8">
                            {destinations.map((planet, index) => (
                                <li
                                    onClick={() => setSelectedId(index)}
                                    className={`
                                    ${
                                        selectedId === index
                                            ? "after:absolute after:left-0 after:right-0 after:-bottom-3 after:bg-white after:h-1"
                                            : " hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:-bottom-3 hover:after:bg-white/30 hover:after:h-1"
                                    } relative cursor-pointer`}
                                    key={index}
                                >
                                    <h3>{planet.name}</h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                <div className="lower">
                    <div className="flex flex-col items-center justify-center md:w-1/2">
                        <h4>avg. distance</h4>
                        <span className="value">{distance}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center md:w-1/2">
                        <h4>est. travel time</h4>
                        <span className="value">{travel}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;
