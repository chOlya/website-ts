import s from '../AboutUs/AboutUs.module.css';
import Women from '../../assets/img/aboutUs/women.jpg';
import FirstMen from '../../assets/img/aboutUs/men1.jpg';
import SecondMen from '../../assets/img/aboutUs/men2.jpg';
import AboutUsItem from './AboutUsItem';

const AboutUs = () => {
    return (
        <div className={s.aboutUs}>
            <div className={s.aboutUs__container}>
                <h1 className={s.aboutUs__title}>About Us</h1>
                <div className={s.aboutUs__text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                <div className={s.aboutUs__columns}>
                    <AboutUsItem imageURL={Women} name='Melannie Doe' profession='Project Manager' text='Ut wisi enim ad minim veniam, quis nostrud exerci tation' />
                    <AboutUsItem imageURL={FirstMen} name='Jhonnie Doe' profession='Graphic Designer' text='Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' />
                    <AboutUsItem imageURL={SecondMen} name='Daniel Doe' profession='Web Designer' text='Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo' />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;