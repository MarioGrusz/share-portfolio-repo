import "./index.scss";
import { useEffect } from "react";
import aboutMeText from "./text";
import { textAnimation } from "./animation";
import { useLocation } from "react-router-dom";


const AboutMe = () => {

    const location = useLocation();


    useEffect(() => {
        textAnimation();   
    }, [location]);
    

    return (
        <section  className="about-me">
            <div className="about-me__container">

                <div className="about-me__text1">
                    <p className="split" text-split="" words-slide-up=''>{aboutMeText.firstParagraph}</p>
                </div>
                <div className="about-me__text2">
                    <p className="split" text-split="" words-slide-up=''>{aboutMeText.secondParagraph}</p>
                </div>

            </div>
        </section>
    )
}



export default AboutMe