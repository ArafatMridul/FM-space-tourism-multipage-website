import React, { useEffect, useState } from "react";

import destinationBgDesktop from "../../assets/destination/background-destination-desktop.jpg";
import destinationBgTablet from "../../assets/destination/background-destination-tablet.jpg";
import destinationBgMobile from "../../assets/destination/background-destination-mobile.jpg";

function Destination() {
    const [selectedId, setSelectedId] = useState("02e2");
    const [selectedPlanet, setSelectedPlanet] = useState({});

    const { name, images, description, distance, travel } = selectedPlanet;

    useEffect(
        function () {
            async function getPlanet() {
                const res = await fetch(
                    `http://localhost:8000/destinations/${selectedId}`
                );
                const data = await res.json();
                setSelectedPlanet(data);
            }
            getPlanet();
        },
        [selectedId]
    );

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
                    <h1>{name}</h1>
                    <ul className="flex items-center justify-center gap-8">
                        <li>
                            <button
                                onClick={() => setSelectedId("02e2")}
                                className={
                                    selectedId === "02e2"
                                        ? "relative after:absolute after:-left-1 after:right-0 after:-bottom-3 after:bg-white after:h-1"
                                        : ""
                                }
                            >
                                <h3>moon</h3>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setSelectedId("56f2")}
                                className={
                                    selectedId === "56f2"
                                        ? "relative after:absolute after:left-0 after:right-0 after:-bottom-3 after:bg-white after:h-1"
                                        : ""
                                }
                            >
                                <h3>mars</h3>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setSelectedId("d03f")}
                                className={
                                    selectedId === "d03f"
                                        ? "relative after:absolute after:left-0 after:right-0 after:-bottom-3 after:bg-white after:h-1"
                                        : ""
                                }
                            >
                                <h3>europa</h3>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setSelectedId("4f14")}
                                className={
                                    selectedId === "4f14"
                                        ? "relative after:absolute after:left-0 after:right-0 after:-bottom-3 after:bg-white after:h-1"
                                        : ""
                                }
                            >
                                <h3>titan</h3>
                            </button>
                        </li>
                    </ul>
                    <p>{description}</p>
                </div>
                <div className="lower">
                    <div>
                        <h4>avg. distance</h4>
                        <span className="value">{distance}</span>
                    </div>
                    <div>
                        <h4>est. travel time</h4>
                        <span className="value">{travel}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;
