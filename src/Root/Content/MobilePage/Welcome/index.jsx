import styles from './styles.scss';

export default class extends React.Component {

    render() {
        return(
            <div className={styles['back-image']}>
                <div className={styles['content-first-page']}>
                    <div className={styles['main-label']}>Создание мобильных приложений для Android & iOS</div>
                    <button className={styles['btn-order']}>Заказать</button>
                </div>
            </div>
        )
    }
};