import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from '../ContactUs/ContactUs.module.css';
import YandexMap from './YandexMap';

const ContactUs = () => {

    return (
        <div className={s.contactUs}>
            <div className={s.contactUs__container}>
                <h1 className={s.contactUs__title}>Contact Us</h1>
                <div className={s.contactUs__text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                <div className={s.contactUs__body}>
                    <form className={s.contactUs__form}>
                        <div className={s.name_email_message}>
                            <input type='name' className={s.input__name} placeholder='Your name' />
                            <input type='email' className={s.input__email} placeholder='Your email' />
                            <input className={s.input__message} placeholder='Your message' />
                        </div>
                        <input className={s.input__submit} type='submit' value='SUBMIT' />
                    </form>
                    <div className={s.contactUs__map}>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <div className={s.address}>Bla Bla Company 125009 Moscow, Red Square 1</div>
                        <div className={s.ymap}>
                            <YandexMap />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;