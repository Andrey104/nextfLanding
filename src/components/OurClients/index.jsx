import styles from './styles.scss';


export default class extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.title}>Наши клиенты</div>
                <div className={styles['img-container']}>
                    <div className={styles['img-client-1']}/>
                    <div className={styles['img-client-2']}/>
                    <div className={styles['img-client-3']}/>
                </div>
            </div>
        )
    }
}