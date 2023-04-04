import * as React from 'react';
import classNames from "classnames/bind";

import styles from './MainLayout.module.scss';
import Header from '../components/Header';
// import Footer from '../components/Footer';

const cx = classNames.bind(styles)

const MainLayout: React.FC<any> = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>  
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default MainLayout;