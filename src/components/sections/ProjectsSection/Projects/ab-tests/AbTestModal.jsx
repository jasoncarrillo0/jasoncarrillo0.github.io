import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { wrap } from './AbTestModal.module.scss';
import StorageIcon from '@mui/icons-material/Storage';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import BuildIcon from '@mui/icons-material/Build';
import GitHubBtn from '../reusable/GitHubBtn';
import PrimaryInfo from '../reusable/PrimaryInfo';
import AboutSection from '../reusable/AboutSection';
import Techstack from '../reusable/Techstack';

const style = {
    bgcolor: 'background.paper',
  };



const AbTestModal = ({ open, setOpen }) => {
    const frontendInfo = "I jsldfjk sjjsk eieowow sjdkd dieowow skdkd dl wowowow skkskdkke eiowowoe ekeke eke  eke ekekeowie ekwpaksldpa we ele wowooe eowowe."
    const backendInfo = "eieiei wowowo sksksk x,x, dkk ek e wiowoww eiwi x,xls wlwlekeos e;ee E e;w;s eelelskap eipdssd sllc, ieiwoeiiroworel;."
    const purpose = "qwpwpw eoeo eoeoeow qpq q woowo ee eiieieiei .w wowowow e.. eeowowoeooeow  owowoe e eowo eoeow.w wowowoweoe eeieeiwow wowowooei eieooowpwpq wowe."
    const technologies = ['React', 'NodeJS', 'Docker', 'Typescript', 'Express', 'Material-UI', 'Redux', 'Redux-Saga', 'SASS']
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                <Box sx={style} className={wrap}>
                    <h2>A/B Test Collaboration Portal</h2>
                    <table>
                        <tr>
                            <PrimaryInfo
                                title="Frontend" 
                                info={frontendInfo}
                                icon={<ImportantDevicesIcon/>}
                                gitLink="https://github.com"
                                demoLink="https://google.com"
                            />
                            <PrimaryInfo
                                title="Backend"
                                info={backendInfo}
                                icon={<StorageIcon/>}
                            />
                            <PrimaryInfo
                                title="Purpose"
                                info={purpose}
                                icon={<BuildIcon/>}
                            />

                        </tr>
                    </table>
                    <AboutSection/>
                    <Techstack techs={technologies}/>
                </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default AbTestModal;