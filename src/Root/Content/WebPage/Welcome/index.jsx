import styles from './styles.scss';

export default class extends React.Component {

    render() {
        return(
            <div className={styles['back-image']}>
                <div className={styles['content-first-page']}>
                    <div className={styles['main-label']}>Разрабатываем web-приложения, сложные сайты и сервисы</div>
                </div>
            </div>
        )
    }
};