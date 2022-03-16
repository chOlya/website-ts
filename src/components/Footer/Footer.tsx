import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'react-scroll/modules/components/Link';
import s from '../Footer/Footer.module.css';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer__container}>
                <div className={s.footer__text}>© Copyright 2016 Bla Bla Studio  |  One Page Flat Template</div>
                <div className={s.footer__icon__container}>
                    <Link activeClass="active"
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <FontAwesomeIcon icon={faSquareCaretUp} className={s.footer__icon} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;