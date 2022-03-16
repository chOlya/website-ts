import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import s from '../Portfolio/Portfolio.module.css';

interface PortfolioProps {
    imageURL: string;
}

const PortfolioItem: React.FC<PortfolioProps> = ({ imageURL }) => {
    return (
        <div className={s.portfolio__item}>
            <div className={s.portfolio__wrapper}>
                <div className={s.imageWrapper}>
                    <div className={s.overlay}>
                        <div className={s.background}></div>
                        <div className={s.circle}></div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={s.fa_icon} />
                    </div>
                    <img src={imageURL} alt='Icon' />
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem;