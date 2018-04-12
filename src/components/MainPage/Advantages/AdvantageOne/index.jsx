import styles from './css/styles.scss';
import first from './images/1.png';
import second from './images/2.png';
import third from './images/3.png';
import fourth from './images/4.png';
import five from './images/5.png';
import six from './images/6.png';
import seven from './images/7.png';
import eight from './images/8.png';

export default class extends React.Component {

    constructor(props) {
        super(props);

        this.adv = props.adv;
        this.image = {
            1: first,
            2: second,
            3: third,
            4: fourth,
            5: five,
            6: six,
            7: seven,
            8: eight,
        }

    }

    render() {
        return (
            <div className={styles.container}>
                <img src={this.image[this.adv.image]}/>
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