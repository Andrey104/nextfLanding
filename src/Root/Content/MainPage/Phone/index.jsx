import styles from './styles.scss'


export default class extends React.Component {
    render() {
        return (
            <div className={styles['container-iphone']}>
                <div className={styles['image-load']}/>
                <div className={styles['iphone']}/>
                <div className={styles['iphone-hover']}/>
                <div className={styles['title-iphone']}>Мобильные приложения</div>
                <div className={styles['description-iphone']}>Разрабатываем приложения для всех типов устройств
                </div>
            </div>
        )
    }
}