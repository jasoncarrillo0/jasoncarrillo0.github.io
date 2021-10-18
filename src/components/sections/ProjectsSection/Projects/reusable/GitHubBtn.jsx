import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { wrap } from './Btns.module.scss'


const GitHubBtn = ({ link }) => {
    return (
        <Button className={wrap} size="small" href={link} variant="contained" endIcon={<GitHubIcon/>} target="_blank">
            View Code
        </Button>
    );
};

export default GitHubBtn;