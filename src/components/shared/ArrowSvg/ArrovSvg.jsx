import './index.scss';

const ArrowSvg = () => {
  return (
    
    <div>
        <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.56 9.56">
            <line
                id="line1"
                x1="0.27"
                y1="9.29"
                x2="9.18"
                y2="0.38"
                fill="#4e4e4e"
                stroke="#4e4e4e"
                strokeMiterlimit={10}
                strokeWidth="0.75"
                style={{
                strokeDashoffset: '-13.6006px',
                strokeDasharray: '0px, 23.6006px'
                }}
            />
            <line
                id="line2"
                x1="0.27"
                y1="9.29"
                x2="9.18"
                y2="0.38"
                fill="#4e4e4e"
                stroke="#4e4e4e"
                strokeMiterlimit={10}
                strokeWidth="0.75"
                style={{ strokeDashoffset: 0, strokeDasharray: 'none' }}
            />
            <polyline
                id="arrow-head-1"
                points="5.01 0.38 9.18 0.38 9.18 4.55"
                fill="none"
                stroke="#4e4e4e"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth="0.75"
                style={{ strokeDashoffset: '-9.34px', strokeDasharray: '0px, 19.34px' }}
            />
            <polyline
                id="arrow-head-2"
                points="5.01 0.38 9.18 0.38 9.18 4.55"
                fill="none"
                stroke="#4e4e4e"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth="0.75"
                style={{ strokeDashoffset: 0, strokeDasharray: 'none' }}
            />
        </svg>
    </div>
  )
}

export default ArrowSvg