import './index.scss';
import { Link } from 'react-router-dom';
import getYear from './utils';
import ButtonCircle from '../shared/ButtonCircle/ButtonCircle';
import Button from '../shared/Button/Button';


const Footer = () => {

    const currentYear = getYear();

    return (
        <section className='footer'>
            <div className='footer__container'>
                <div className='footer__top-section'>
                    <h2>Get in Touch</h2>
                </div>

                <div className='footer__button-container'>
                    <ButtonCircle text='email me'/>
                </div>

                <div className='footer__line'></div>

                <div className='footer__bottom-section'>
                    <div className='footer__social-media-links-wrapper'>
                        <Link to={{ pathname: "https://facebook.com" }} target="_blank" >
                            <Button text='LinkedIn' content='LinkedIn'/>
                        </Link>

                        <Link to={{ pathname: "https://facebook.com" }} target="_blank" >
                            <Button text='GitHub' content='GitHub'/>
                        </Link>
                    </div>

                    <div className='footer__copyright-wrapper'>
                        <div className='footer__copyright'>
                            ©{currentYear} Designed and Coded by Mariusz Gruszczynski
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
  
}

export default Footer