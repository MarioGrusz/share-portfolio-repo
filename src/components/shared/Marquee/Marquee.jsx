import "./index.scss";
import React, { useRef, useEffect } from 'react';
import initializeMarquee from "./animation";

const Marquee = ({ children, duration = 5 }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {

    initializeMarquee(marqueeRef, duration);

    return () => {
      // Clean up by removing event listener and killing the tween
      initializeMarquee.cleanup();
    };

  }, [duration]);

  return (
    <section className="container">
      <div ref={marqueeRef} className="marquee">
        <div className="marquee-content">{children}</div>
      </div>
    </section>
  );
};

export default Marquee;