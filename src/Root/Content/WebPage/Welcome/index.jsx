import styles from './styles.scss';

export default class extends React.Component {

    render() {
        return (
            <div>
                <img className={styles['back-image']} src={'/static/oboi-web.jpg'}/>
                <div className={styles['content-first-page']}>
                    <div className={styles['main-label']}>Разрабатываем web-приложения, сложные сайты и сервисы</div>
                    <button className={styles['btn-order']}>Заказать</button>
                </div>
            </div>
        )
    }
};