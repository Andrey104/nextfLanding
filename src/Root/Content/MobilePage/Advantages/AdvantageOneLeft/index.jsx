import styles from './css/styles.scss';

export default class extends React.Component {

    constructor(props) {
        super(props);

        this.adv = props.adv;
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <div className={styles[`image-${this.adv.image}`]}/>
                    <div className={styles.title}>
                        {this.adv.title}
                    </div>
                    <div className={styles.content}>
                        {this.adv.content}
                    </div>
                    <div className={styles.spinner}></div>
                </div>
            </div>
        )
    }

};