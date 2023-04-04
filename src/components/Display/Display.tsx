import { useState } from 'react';
import classNames from "classnames/bind";
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

import styles from './Display.module.scss';

const cx = classNames.bind(styles)

const Display: React.FC<any> = ({ children }) => {
    
    const [selected, setSelected] = useState(false)
    const [selectedNetWork, setSelectedNetWork] = useState(false)

    const handleSelectState = () => {
        setSelected(!selected)
        setSelectedNetWork(false)
    }

    const handleSelectStateNetWork =() => {
        setSelectedNetWork(!selectedNetWork)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                Display
            </div>

            <div className={cx('group')} onClick={handleSelectState}>
                {selected === false 
                    ? 
                        <>
                            <ArrowRightRoundedIcon />
                            <FolderRoundedIcon color='warning'/>
                              Intern
                            
                        </>
                        
                    :
                        <>
                            <ArrowDropDownRoundedIcon />
                            <FolderRoundedIcon color='warning'/>
                              Intern
                        </>
                        
                }
            </div>
        
            {selected === false 
                    ? 
                        <>
                            
                        </>
                        
                    :
                        <>
                        <div className={cx('network') } onClick={handleSelectStateNetWork}>
                            {selectedNetWork
                            ?
                            <>
                            <ArrowDropDownRoundedIcon sx={{marginLeft:'15px'}}/>
                              Network
                            </>
                            :
                            <>
                            <ArrowRightRoundedIcon sx={{marginLeft:'15px'}}/>
                            Network
                            </>
                            }
                        </div>
                        </>
                        
                }
            {selectedNetWork === true
            ?
            <>
                <div className={cx('ipaddress') }>
                            
                                <CircleRoundedIcon sx={{ fontSize: 6,color:'red',marginLeft:'30px'}}/>
                                192.168.1.2
                        
                        </div>
            </>
            :
            <>

            </>
            }

        </div>
    );
}

export default Display;
