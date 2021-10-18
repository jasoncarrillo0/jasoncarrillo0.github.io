import React from 'react';
import {
    wrap,
    topLevelWrap
} from './ProjectsTitle.module.scss';

const ProjectsTitle = () => {
    return (
        <div className={topLevelWrap}>
            <div className={wrap}>
                <h2>PROJECTS</h2>
            </div>
        </div>
    );
};

export default ProjectsTitle;