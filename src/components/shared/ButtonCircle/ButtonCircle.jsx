import './index.scss';

const ButtonCircle = ({ text, backgroundColor, color }) => {

  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
  };

  return (
    <div className='btn-wrapper'>
        <a style={buttonStyle} className='btn' id='contact' href='mailto: mario.gruszczynski@gmail.com'>
            <span className='btn__text'>{text}</span>
            <span className='btn__circle'>
                <span className='btn__bg'></span>
                <span className='btn__border'></span>
            </span>
        </a>
    </div>
  )
}

export default ButtonCircle