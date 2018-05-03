import {HashLink as Link} from 'react-router-hash-link';

import styles from './css/styles.scss';


export default class extends React.Component {
    render() {
        return (
            <div>
                <img className={styles['back-image']} src={'/static/oboi-main.jpg'}/>
                <div className={styles['content-first-page']}>
                    <div className={styles['main-label']}>Создание web-сайтов и разработка мобильных приложений</div>
                    <Link to={'/about/#form'} onClick={this.redirectToOrder} className={styles['btn-order']}>Заказать</Link>
                </div>
            </div>
        )
    }
}