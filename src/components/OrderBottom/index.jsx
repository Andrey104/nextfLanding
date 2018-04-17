import styles from './styles.scss';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>Мы найдем лучшее решение вашей задачи!</div>
                <button className={styles.btn}>Оставить заявку</button>
            </div>
        );
    }
};