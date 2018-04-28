import styles from './css/styles.scss'

export default class extends React.Component {
    render() {
        return (
                <div>
                    <img className={styles['back-image']} src={'/static/oboi-main.jpg'}/>
                    <div className={styles['content-first-page']}>
                        <div className={styles['main-label']}>Создание web-сайтов и разработка мобильных приложений</div>
                        <button className={styles['btn-order']}>Заказать</button>
                    </div>
                </div>
        )
    }
}