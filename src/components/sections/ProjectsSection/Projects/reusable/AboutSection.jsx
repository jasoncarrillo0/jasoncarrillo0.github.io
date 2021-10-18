import { Paper } from '@mui/material';
import React from 'react';
import {wrap, innerWrap, titleWrap, title} from './AboutSection.module.scss';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


const p1 = "kwekj wjwj eowoow eooweo wieieiwo wowoqpowieu wiwi eoeo wkdkx xlsl e. owo weie woow ekel..sls owieoie eowieiieo woeieieiw wowolsldl sdlwllwe owoeoe woeieo."
const AboutSection = () => {
    return (
        <Paper className={wrap}>
            <div className={innerWrap}>
                <div className={titleWrap}>
                    <div className={title}>
                        <h4>About the project</h4>
                        <LocalLibraryIcon/>
                    </div>
                    <hr/>
                </div>
                <p>{p1}</p>
            </div>
        </Paper>
    );
};

export default AboutSection;