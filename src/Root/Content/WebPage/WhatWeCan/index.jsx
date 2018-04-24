import styles from './styles.scss';

export default class extends React.Component {

    render() {
        return(
            <div className={styles.container}>
                <div className={styles.title}>Что мы умеем?</div>
                <div className={styles['container-images']}>
                    <div className={styles['image-1']}/>
                    <div className={styles['image-2']}/>
                    <div className={styles['image-3']}/>
                    <div className={styles['description-1']}>Корпоративные порталы, сложные интернет-проекты</div>
                    <div className={styles['description-2']}>CRM системы</div>
                    <div className={styles['description-3']}>Системы электронной коммерции</div>
                    <div className={styles['image-1']}/>
                    <div className={styles['image-2']}/>
                    <div className={styles['image-3']}/>
                    <div className={styles['description-4']}>Корпоые порталы, сложные интернет-проекты</div>
                    <div className={styles['description-5']}>CRM системы</div>
                    <div className={styles['description-6']}>Системы электронной коммерции</div>
                </div>
            </div>
        )
    }
};