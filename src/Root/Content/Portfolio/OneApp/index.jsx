import styles from './styles.scss';


export default class extends React.Component {

    render() {
        const {app} = this.props;
        return (
            <div className={styles['container']}>
                <div className={styles[`image-${app.image}`]}/>
                <div className={styles.description}>{app.description}
                <div className={styles['icon-container']}>
                    {app.icons.android && <div className={styles['icon-android']}/>}
                    {app.icons.apple && <div className={styles['icon-apple']}/>}
                    {app.icons.pc && <div className={styles['icon-pc']}/>}
                </div>
                </div>

            </div>
        );
    }
};