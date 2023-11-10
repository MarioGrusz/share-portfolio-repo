import "./index.scss";
import { useEffect, useRef } from "react";
import introTextAnimation from "./animation";
import gsap from "gsap";


const Hero = () => {

    const timeline = useRef(gsap.timeline());
    const heroTextRefs = [useRef(null), useRef(null)];

    useEffect(() => {
        const context = gsap.context(() => {
            const tl = timeline.current;
            tl.add(introTextAnimation(heroTextRefs))
        });

        return () => context.revert();
    }, [])

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