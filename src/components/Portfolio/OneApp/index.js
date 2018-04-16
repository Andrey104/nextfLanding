import styles from './styles.scss';


export default class extends React.Component {

    constructor(props) {
        super(props);

        this.title = props.app.title;
        this.description = props.app.description;
        this.icons = props.app.icons;
        this.image = props.app.image;
    }


    render() {
        return (
            <div className={styles['container']}>
                <div className={styles[`image-${this.image}`]}/>
                <div className={styles.title}>{this.title}</div>
                <div className={styles.description}>{this.description}</div>
                {this.icons.android && <div className={styles['icon-android']}/>}
                {this.icons.apple && <div className={styles['icon-apple']}/>}
                {this.icons.pc && <div className={styles['icon-pc']}/>}
            </div>
        )
    }
};