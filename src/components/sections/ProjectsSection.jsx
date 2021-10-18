import React from 'react';
import {
    wrap
} from './ProjectsSection.module.scss';
import AbTestProject from './ProjectsSection/Projects/ab-tests/AbTestProject';
import ProjectCard from './ProjectsSection/Projects/ab-tests/AbTestProject';
import ProjectsTitle from './ProjectsSection/ProjectsTitle';


// maybe i can have some chips with technology used
const projects = {
    abtests: {
        title: "A/B Test Collaboration Tool",
        summary: "Full-stack app to create a/b test projects, designs, with data viz components.",
    }
};
const ProjectsSection = () => {
    return (
        <div className={wrap}>
            <ProjectsTitle/>
            <AbTestProject {...projects.abtests}/> 
            
        </div>
    );
};

export default ProjectsSection;