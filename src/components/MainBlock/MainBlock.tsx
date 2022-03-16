import s from './MainBlock.module.css';
import BackgroundImage from '../../assets/img/background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";
import { NavLink } from 'react-router-dom';
import React from 'react';


const MainBlock: React.FC = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.mainBlock__container}>
                <div className={s.mainBlock__body}>
                    <h1 className={s.mainBlock__title}>
                        We Build <span className={s.mainBlock__span}>Brand</span>
                    </h1>
                    <div className={s.mainBlock__text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibheuismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </div>
                    <div className={s.mainBlock__buttons}>
                        <div className={s.mainBlock__firstButton}>
                            <NavLink to="/learnMore" className={s.mainBlock__button__firstLink}>LEARN MORE</NavLink>
                        </div>
                        <div className={s.mainBlock__secondButton}>
                            <Link activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <FontAwesomeIcon icon={faCircleChevronDown} className={s.mainBlock__arrow} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={s.mainBlock__image}>
                    <img src={BackgroundImage} alt='Background image' />
                </div>
            </div>
        </div>
    );
}

export default MainBlock;