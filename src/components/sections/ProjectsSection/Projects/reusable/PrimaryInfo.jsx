import { Card, CardContent, Paper } from '@mui/material';
import React from 'react';
import DemoBtn from './DemoBtn';
import GitHubBtn from './GitHubBtn';

import {wrap, titleWrap, infoWrap, btnWrap} from './PrimaryInfo.module.scss';


const PrimaryInfo = ({ title, info, icon, gitLink, demoLink, ytBtn }) => {

    const hasBtns = gitLink || demoLink || ytBtn;
    return (
        <Paper className={wrap}>
            <CardContent>
                <div className={titleWrap}>
                    {title}
                    {icon}
                </div>
                <div className={infoWrap}>
                    {info}
                </div>

                {
                    hasBtns && (
                        <div className={btnWrap}>
                            {
                                gitLink  ?  <GitHubBtn link={gitLink}/> : null
                            }
                            {
                                demoLink && <DemoBtn link={demoLink}/>
                            }
                            {
                                ytBtn && <GitHubBtn link={gitLink}/>
                            }
                        </div>
                    )
                }
                
                
                
            </CardContent>
        </Paper>
    );
};

export default PrimaryInfo;