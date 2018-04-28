import {HashLink as Link} from 'react-router-hash-link';

import styles from './styles.scss';


export default class extends React.Component {

    render() {
        return(
            <div >
                <img className={styles['back-image']} src={'/static/oboi-mobile.jpg'}/>
                <div className={styles['content-first-page']}>
                    <div className={styles['main-label']}>Создание мобильных приложений для Android & iOS</div>
                    <Link to={'/about'} className={styles['btn-order']}>Заказать</Link>
                </div>
            </div>
        )
    }
};