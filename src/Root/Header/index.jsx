import styles from './styles.scss'

export default class extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.logo}>
                    <div >logo</div>
                </div>
                <ul className={styles.menu}>
                    <li className={styles['menu-element']}>Главная</li>
                    <li className={styles['menu-element']}>Услуги</li>
                    <li className={styles['menu-element']}>Портфолио</li>
                    <li className={styles['menu-element']}>Контакты</li>
                    <li className={styles['menu-element']}>Клиенты</li>
                </ul>
                <div className={styles['phone-info']}>
                    <div className={styles.phone}>8 (499) 229-30-39</div>
                </div>
            </div>
        )
    }
}