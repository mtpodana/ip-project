import config from "../../../../config";
import classNames from "classnames/bind";

import styles from './MenuTitles.module.scss';
import Titles, { TitleItem } from '../MenuTitles/Menu';

const cx = classNames.bind(styles)

const MenuTitles: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <Titles>
                <TitleItem title='ID Address Manager' to={config.routes.home} icon={null}  />
                <TitleItem title='User Manager' to={config.routes.user} icon={null}  />
                <TitleItem title='Account Manager' to={config.routes.account} icon={null}  />
                <TitleItem title='NetWork Manager' to={config.routes.network} icon={null}  />
            </Titles>
        </div>
    )
}

export default MenuTitles;
