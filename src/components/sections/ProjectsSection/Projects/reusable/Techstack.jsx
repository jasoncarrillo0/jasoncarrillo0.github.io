import { Chip } from '@mui/material';
import React from 'react';
import { wrap, techWrap } from './Techstack.module.scss';
import BoltIcon from '@mui/icons-material/Bolt';

const Techstack = ({ techs }) => {
    return (
        <div className={wrap}>
            <h3>Technologies Used</h3>
            <hr/>
            <div className={techWrap}>
            {
                techs.map(tech => <Chip label={tech} icon={<BoltIcon/>}/>)
            }
            </div>
            
        </div>
    );
};

export default Techstack;