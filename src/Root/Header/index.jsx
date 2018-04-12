import styles from './css/styles.scss'

export default class extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.header}></div>
                <div className={styles['div-container']}>
                    <div className={styles.logo}>
                    </div>
                    <div className={styles.menu}>
                        <a className={styles['menu-element']}>Главная</a>
                        <a className={styles['menu-element']}>Услуги</a>
                        <a className={styles['menu-element']}>Портфолио</a>
                        <a className={styles['menu-element']}>Контакты</a>
                        <a className={styles['menu-element']}>Клиенты</a>
                    </div>
                    <div className={styles['phone-info']}>
                        <div className={styles.phone}>+7 (499) 229-30-39</div>
                    </div>
                </div>
            </div>
        )
    }
}