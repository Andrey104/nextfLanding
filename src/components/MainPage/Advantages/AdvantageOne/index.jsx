import styles from './css/styles.scss';


export default class extends React.Component {

    constructor(props) {
        super(props);

        this.adv = props.adv;
        console.log(this.adv.image);
    }

    render() {
        return (
            <div className={styles.container}>
                <img  src={'../../Laptop/images/macbook.png'} />
                <div className={styles.title}>
                    {this.adv.title}
                </div>
                <div className={styles.content}>
                    {this.adv.content}
                </div>
            </div>
        )
    }

};