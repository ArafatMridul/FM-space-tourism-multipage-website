import React from "react";
import homeBgDesktop from "../../assets/home/background-home-desktop.jpg";
import homeBgTablet from "../../assets/home/background-home-tablet.jpg";
import homeBgMobile from "../../assets/home/background-home-mobile.jpg";

function Homepage() {
    return (
        <div className="wrapper homepage">
            <picture className="image">
                <source
                    media="(min-width:1100px)"
                    srcSet={homeBgDesktop}
                    width="1440px"
                    height="900px"
                />
                <source
                    media="(min-width:700px)"
                    srcSet={homeBgTablet}
                    width="1536px"
                    height="2048px"
                />
                <img
                    src={homeBgMobile}
                    alt="home background"
                    width="750px"
                    height="1624px"
                />
            </picture>
            <div className="home_hero">
                <h2>so, you want to travel to</h2>
                <h1>space</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
                <div className="explore">
                    <div className="relative group">
                        <div className="overlay opacity-[7%] group-hover:scale-[170%] transition duration-300"></div>
                        <span>explore</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
