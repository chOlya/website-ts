import s from '../Portfolio/Portfolio.module.css';
import IconPhoto from '../../assets/img/profile/icon_photo.svg';
import IconMusic from '../../assets/img/profile/icon_music.svg';
import IconSettings from '../../assets/img/profile/icon_settings.svg';
import IconCompass from '../../assets/img/profile/icon_compass.svg';
import IconPhone from '../../assets/img/profile/icon_phone.svg';
import IconBubbles from '../../assets/img/profile/icon_bubbles.svg';
import React from 'react';
import PortfolioItem from './PortfolioItem';
import { useState } from 'react';

const Portfolio: React.FC = () => {

    const [state, setState] = useState('all');
    const [activeButton, setActive] = useState('all');

    let items = [
        { item: "Photo", image: IconPhoto, categories: ['all', 'web', 'graphic', 'flat'] },
        { item: "Music", image: IconMusic, categories: ['all',] },
        { item: "Settings", image: IconSettings, categories: ['all', 'graphic', 'flat'] },
        { item: "Compass", image: IconCompass, categories: ['all', 'web', 'flat'] },
        { item: "Phone", image: IconPhone, categories: ['all', 'web', 'graphic'] },
        { item: "Bubbles", image: IconBubbles, categories: ['all', 'graphic', 'flat'] },
        { item: "Photo2", image: IconPhoto, categories: ['all',] },
        { item: "Music2", image: IconMusic, categories: ['all', 'web', 'graphic'] },
    ];

    let onAllButton = () => {
        setState('all');
        setActive('all');
    }

    let onWebDesignButton = () => {
        setState('web');
        setActive('web');
    }

    let onGraphicDesignButton = () => {
        setState('graphic');
        setActive('graphic');
    }

    let onFlatButton = () => {
        setState('flat');
        setActive('flat');
    }

    let filtred = items.filter(i => i.categories.includes(state));

    return (
        <div className={s.portfolio} id="portfolio">
            <div className={s.portfolio__container}>
                <div className={s.portfolio__body}>
                    <h1 className={s.portfolio__title}>Portfolio</h1>
                    <div className={s.portfolio__text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                </div>
                <div className={s.portfolio__select}>
                    <div className={s.select__item}>
                        <button className={activeButton === 'all' ? s.active : s.select__item}
                            onClick={() => { onAllButton() }}>All</button>
                    </div>
                    <div className={s.select__item}>
                        <button className={activeButton === 'web' ? s.active : s.select__item}
                            onClick={() => { onWebDesignButton() }}>WEB DESIGN</button>
                    </div>
                    <div className={s.select__item}>
                        <button className={activeButton === 'graphic' ? s.active : s.select__item}
                            onClick={() => { onGraphicDesignButton() }}>GRAPHIC DESIGN</button>
                    </div>
                    <div className={s.select__item}>
                        <button className={activeButton === 'flat' ? s.active : s.select__item}
                            onClick={() => { onFlatButton() }}>FLAT DESIGN</button>
                    </div>
                </div>
                <div className={s.portfolio__icons}>
                    {filtred.map((f) => <PortfolioItem imageURL={f.image}></PortfolioItem>)}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;