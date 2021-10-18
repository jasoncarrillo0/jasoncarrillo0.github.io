import React from 'react';
import { wrap, title, punchline } from './Greeting.module.scss';

const Greeting = () => {
    return (
        <div className={wrap}>
            <h1 className={title}>Hi, I'm Jason</h1>
            <p className={punchline}>Full Stack Web Developer</p>
        </div>
    );
};

export default Greeting;