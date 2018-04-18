import {Link} from 'react-router-dom';

import styles from './css/styles.scss';

export default class extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.header}/>
                <div className={styles['div-container']}>
                    <Link to='/'>
                        <div className={styles.logo}/>
                    </Link>
                    <div className={styles.menu}>
                        <Link to='/' className={styles['menu-element']}>Главная</Link>
                        <Link to='/' className={styles['menu-element']}>Услуги</Link>
                        <Link to='/' className={styles['menu-element']}>Портфолио</Link>
                        <Link to='/' className={styles['menu-element']}>Контакты</Link>
                        <Link to='/' className={styles['menu-element']}>Клиенты</Link>
                    </div>
                    <div className={styles['phone-info']}>
                        <div className={styles.phone}>+7 (499) 229-30-39</div>
                    </div>
                </div>
            </div>
        )
    }
}