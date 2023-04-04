import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Display from '../../components/Display';
import MainScreen from '../../layouts/components/MainScreen';

const cx = classNames.bind(styles)

const Home: React.FC<any> = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Display />
            <MainScreen />
        </div>
    );
    // return(
    //     <div>abc</div>
    // )
}

export default Home;
