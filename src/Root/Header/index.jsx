import {HashLink as Link} from 'react-router-hash-link';

import styles from './css/styles.scss';

export default class extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

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
                        <Link to='/#services' className={styles['menu-element']}>Услуги</Link>
                        <Link to='/portfolio' className={styles['menu-element']}>Портфолио</Link>
                        <Link to='/about' className={styles['menu-element']}>Контакты</Link>
                    </div>
                    <div className={styles['phone-info']}>
                        <div className={styles.phone}>+7 (499) 229-30-39</div>
                    </div>
                </div>
            </div>
        )
    }
};