import "./index.scss";
import { useMainContext } from "../../../context/MainContext";


const SvgOverlay = () => {

  const { overlayPathRef } = useMainContext();

  return (
    <>
      <svg
        className="svg-overlay"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={overlayPathRef}
          className="svg-path"
          fill="#879f87"
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        />
      </svg>
    </>
  );
};

export default SvgOverlay;