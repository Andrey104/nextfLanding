import styles from './styles.scss';
import {Link} from "react-router-dom";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>Мы найдем лучшее решение вашей задачи!</div>
                <Link to={'/about'} className={styles.btn}>Оставить заявку</Link>
            </div>
        );
    }
};