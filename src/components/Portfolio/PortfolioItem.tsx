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
                    <img src={imageURL} alt='Icon' />
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem;