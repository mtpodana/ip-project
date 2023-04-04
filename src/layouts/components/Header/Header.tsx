import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


import styles from './Header.module.scss';
import config from '../../../config';
import Titles from './MenuTitles/MenuTitles';

const cx = classNames.bind(styles)

const Header: React.FC<any> = ({ children }) => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('titles')}>
                    <Titles />
                </div>

                <div className={cx('user')}>
                    <AccountCircleRoundedIcon sx={{ fontSize: 40, color: '#fff' }}/>
                </div>
            </div>
        </div>
    )
}

export default Header;