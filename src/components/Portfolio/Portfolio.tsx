import s from '../Portfolio/Portfolio.module.css';
import IconPhoto from '../../assets/img/profile/icon_photo.svg';
import IconMusic from '../../assets/img/profile/icon_music.svg';
import IconSettings from '../../assets/img/profile/icon_settings.svg';
import IconCompass from '../../assets/img/profile/icon_compass.svg';
import IconPhone from '../../assets/img/profile/icon_phone.svg';
import IconBubbles from '../../assets/img/profile/icon_bubbles.svg';
import { useDispatch, } from 'react-redux';
import { showAllIcons, showFlatDesignIcons, showGraphicDesignIcons, showWebDesignIcons } from '../../redux/portfolio-reducer';
import React, { useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Portfolio: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showAllIcons());
    }, []);

    let onAllButton = () => {
        dispatch(showAllIcons());
    }

    let onWebDesignButton = () => {
        dispatch(showWebDesignIcons());
    }

    let onGraphicDesignButton = () => {
        dispatch(showGraphicDesignIcons());
    }

    let onFlatButton = () => {
        dispatch(showFlatDesignIcons());
    }

    const isPhotoIcon = useTypedSelector(state => state.portfolio.isPhotoIcon);
    const isMusicIcon = useTypedSelector(state => state.portfolio.isMusicIcon);
    const isSettingsIcon = useTypedSelector(state => state.portfolio.isSettingsIcon);
    const isCompassIcon = useTypedSelector(state => state.portfolio.isCompassIcon);
    const isPhoneIcon = useTypedSelector(state => state.portfolio.isPhoneIcon);
    const isBubblesIcon = useTypedSelector(state => state.portfolio.isBubblesIcon);
    const isPhotoIcon2 = useTypedSelector(state => state.portfolio.isPhotoIcon2);
    const isMusicIcon2 = useTypedSelector(state => state.portfolio.isMusicIcon2);
    const isActive = useTypedSelector(state => state.portfolio.activeButton);

    return (
        <div className={s.portfolio} id="portfolio">
            <div className={s.portfolio__container}>
                <div className={s.portfolio__body}>
                    <h1 className={s.portfolio__title}>Portfolio</h1>
                    <div className={s.portfolio__text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                </div>
                <div className={s.portfolio__select}>
                    <div className={s.select__item}>
                        <button className={isActive === 'all' ? s.active : s.select__item}
                            onClick={() => { onAllButton() }}>All</button>
                    </div>
                    <div className={s.select__item}>
                        <button className={isActive === 'web' ? s.active : s.select__item}
                            onClick={() => { onWebDesignButton() }}>WEB DESIGN</button>
                    </div>
                    <div className={s.select__item}>
                        <button className={isActive === 'graphic' ? s.active : s.select__item}
                            onClick={() => { onGraphicDesignButton() }}>GRAPHIC DESIGN</button>
                    </div>
                    <div className={s.select__item}>
                        <button className={isActive === 'flat' ? s.active : s.select__item}
                            onClick={() => { onFlatButton() }}>FLAT DESIGN</button>
                    </div>
                </div>
                <div className={s.portfolio__icons}>
                    {isPhotoIcon ? <PortfolioItem imageURL={IconPhoto} /> : ''}
                    {isMusicIcon ? <PortfolioItem imageURL={IconMusic} /> : ''}
                    {isSettingsIcon ? <PortfolioItem imageURL={IconSettings} /> : ''}
                    {isCompassIcon ? <PortfolioItem imageURL={IconCompass} /> : ''}
                    {isPhoneIcon ? <PortfolioItem imageURL={IconPhone} /> : ''}
                    {isBubblesIcon ? <PortfolioItem imageURL={IconBubbles} /> : ''}
                    {isPhotoIcon2 ? <PortfolioItem imageURL={IconPhoto} /> : ''}
                    {isMusicIcon2 ? <PortfolioItem imageURL={IconMusic} /> : ''}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;