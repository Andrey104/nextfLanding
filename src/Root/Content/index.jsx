import styles from './css/styles.scss'

export default class extends React.Component {
    render() {
        return (
            <div>
                <div className={styles['back-image']}>
                </div>
                <div className={styles['back-image']}></div>
            </div>
        )
    }
}