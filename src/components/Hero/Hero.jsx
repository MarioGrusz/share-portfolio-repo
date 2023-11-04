import "./index.scss";
import { useEffect, useRef } from "react";


const Hero = () => {

  
    const heroTextRefs = [useRef(null), useRef(null)];

    return (
        <>
            <section className="hero" data-scroll-section data-hidden>

                <div ref={heroTextRefs[0]} className="hero__text-container">
                    <h1>Frontend Engineer</h1>
                </div>

                <div ref={heroTextRefs[1]} className="hero__text-container">
                    <p>Bridging Design and Functionality</p>
                </div>

            </section>
        </>
    )

}

export default Hero;