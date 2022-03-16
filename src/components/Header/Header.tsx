import s from './Header.module.css';
import Logo from '../../assets/img/headerLogo.svg';
import { NavLink } from 'react-router-dom';
import React from 'react';


const Header: React.FC = () => {
    return (
        <div className={s.header} id='header'>
            <div className={s.header__container}>
                <div className={s.header__logo}>
                    <a href='' >
                        <img src={Logo} alt='Header' className={s.header__img} />
                    </a>
                </div>
                <div className={s.header__text}>
                    <h1 className={s.header__title}>BLA BLA</h1>
                    <div className={s.header__subtitle}>One Page Flat Template</div>
                </div>
                <nav className={s.header__menu}>
                    <div className={s.menu__item}>
                        <NavLink to="/home">HOME</NavLink>
                    </div>
                    <div className={s.menu__item}>
                        <NavLink to="/portfolio">PORTFOLIO</NavLink>
                    </div>
                    <div className={s.menu__item}>
                        <NavLink to="/about">ABOUT</NavLink>
                    </div>
                    <div className={s.menu__item}>
                        <NavLink to="/contact">CONTACT</NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
