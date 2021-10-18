import React from 'react';
import  {
    backgroundOverlay,
    background
} from './TopSection.module.scss';
import Greeting from './TopSection/Greeting';

const TopSection = ({}) => {
    return (
        <div className={background}>
            <div className={backgroundOverlay}></div>
            <Greeting/>
        </div>
    );
};

export default TopSection;