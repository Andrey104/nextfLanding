import styles from './styles.scss';


export default class extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.phone}>+7 (499) 229-30-39 | qwerty@mail.ru</div>
                <div className={styles.address}>630090, г. Москва, ул. Почтовая 36а</div>
                <div className={styles.rights}>©2018 NextFormat. Все права защищены</div>
                <div className={styles['img-container']}>
                    <div className={styles['img-1']} />
                    <div className={styles['img-2']} />
                    <div className={styles['img-3']} />
                    <div className={styles['img-4']} />
                </div>
            </div>)

    }
};