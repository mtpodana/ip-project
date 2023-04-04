import { useState } from 'react';
import classNames from "classnames/bind";
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import Action from "../../../components/Action/Action";
import Table from "../../../components/Ip_List/Ip_List";

import styles from './MainScreen.module.scss';

const cx = classNames.bind(styles)
const MainScreen: React.FC<any> = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Action/>
            <Table/>
        </div>
    );
    
}

export default MainScreen;