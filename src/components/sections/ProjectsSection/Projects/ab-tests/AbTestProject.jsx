import React, { useState } from 'react';
import Card from '@mui/material/Card'
import { wrap, codeIcon, cardContent, topCardWrap, svgWrap, msg } from './ProjectCard.module.scss';
import { CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import bgCodeImg from '../../../../../images/proj-bg.jpg';
import AbTestModal from './AbTestModal';

const AbTestProject = ({ title, summary }) => {
    const [open, setOpen] = useState(false);

    return (
        <Card className={wrap}>
            <CardMedia
                component={() => (
                    <div className={topCardWrap}>
                        <img src={bgCodeImg}/>
                        <div className={svgWrap} onClick={() => setOpen(true)}>
                            <CodeIcon className={codeIcon}/>
                            <p className={msg}>View Project</p>
                        </div>
                    </div>
                )}
                alt="project"
                sx={{position: 'relative'}}
            />

            <CardContent className={cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {summary}
                </Typography>
            </CardContent>
            <CardActions className={cardContent}>
                <Button size="small" onClick={() => setOpen(true)}>View Project</Button>
            </CardActions>
            <AbTestModal open={open} setOpen={setOpen}/>
        </Card>
    );
};

export default AbTestProject;