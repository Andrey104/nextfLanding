import {HashLink as Link} from 'react-router-hash-link';

import styles from './styles.scss';


export default class extends React.Component {

    render() {
        return (
            <div>
                <img className={styles['back-image']} src={'/static/oboi-web.jpg'}/>
                <div className={styles['content-first-page']}>
                    <div className={styles['main-label']}>Разрабатываем web-приложения, сложные сайты и сервисы</div>
                    <Link to={'/about'} className={styles['btn-order']}>Заказать</Link>
                </div>
            </div>
        )
    }
};