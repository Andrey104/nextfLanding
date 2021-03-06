import styles from './styles.scss'
import Agile from './Agile'
import FixedCost from './FixedCost'

export default class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            agile: true
        }
    }

    render() {
        const switcher = this.state.agile;
        return (
            <div className={styles['container-work']}>
                <div className={styles['title']}>Как мы работаем?</div>
                <div className={styles['switcher']}>
                    <div className={styles['element-switcher']} onClick={this.agileClick}>Agile
                        {switcher && <div className={styles['line-switcher']}/>}
                    </div>
                    <div className={styles['element-switcher']} onClick={this.fixedCostClick}>Fixed Cost
                        {!switcher && <div className={styles['line-switcher']}/>}
                    </div>
                </div>
                <div className={styles['under-line']} />
                {switcher && <Agile />}
                {!switcher && <FixedCost />}

            </div>
        )
    }

    agileClick = () => {
        this.setState({
            agile: true
        })
    };

    fixedCostClick = () => {
        this.setState({
            agile: false
        });
    }
}