import React from 'react';
import style from './sidetext.module.css'

const SideText = () => {
    return (
        <div className={style.vacature}>
            <div className={style.flexContainer}>
                <p className={style.font}>
                    Zaalmedewerker
                    restaurant Arenberg
                </p>
            </div>
        </div>
    )
};

export default SideText;