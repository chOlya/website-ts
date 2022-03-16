import s from '../AboutUs/AboutUs.module.css';

interface AboutUsProps {
    imageURL: string;
    name: string;
    profession: string;
    text: string;
}

const AboutUsItem: React.FC<AboutUsProps> = ({ imageURL, name, profession, text }) => {
    return (
        <div className={s.column}>
            <div className={s.aboutUs__item}>
                <div className={s.aboutUs__img}>
                    <img className={s.column__person} src={imageURL} alt='' />
                </div>
                <div className={s.column__body}>
                    <h1 className={s.name}>{name}</h1>
                    <div className={s.profession}>{profession}</div>
                    <div className={s.person__text}>{text}</div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsItem;