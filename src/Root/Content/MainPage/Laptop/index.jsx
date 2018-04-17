import styles from './styles.scss'
export default class extends React.Component {
    render() {
        return (
            <div className={styles['container-mac']}>
                <div className={styles['image-load']}/>
                <div className={styles['mac']}/>
                <div className={styles['title-mac']}>WEB-сервисы</div>
                <div className={styles['description-mac']}>Создаем сайты, интернет магазины и бизнес приложения
                </div>
            </div>
        )
    }
}