import React from 'react';
import Button from '@mui/material/Button';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import { wrap } from './Btns.module.scss'

const DemoBtn = ({ link }) => {
    return (
        <Button 
            size="small"
            className={wrap}
            href={link} 
            variant="contained" 
            endIcon={<TransitEnterexitIcon sx={{transform: 'scale(-1, -1)'}}/>}
            target="_blank"
        >
            View Site
        </Button>
    );
};

export default DemoBtn;