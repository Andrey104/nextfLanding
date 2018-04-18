import styles from './styles.scss';

export default class extends React.Component {

    render() {
        return (
            <div className={styles['container']}>
                <div className={styles['title']}>Удобный мобильный сайт - быстро и просто</div>
                <div className={styles['container-content']}>
                    <div className={styles['img-laptop']}/>
                    <div className={styles['description-right-first']}>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        Ab aliquid aperiam corporis cumque doloribus est ex fugiat minima, non placeat quaerat quidem
                        repudiandae totam unde ut velit, veritatis vero voluptatem. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. A architecto fugit itaque neque nesciunt quidem vel. Architecto,
                        at commodi cum eius facere numquam odit omnis optio, perspiciatis quasi, reprehenderit
                        voluptatum. Ab aliquid aperiam corporis cumque doloribus est ex fugiat minima, non placeat
                        quaerat quidem
                    </div>
                    <div className={styles['img-ipad']}/>
                    <div className={styles['description-left']}>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        Ab aliquid aperiam corporis cumque doloribus est ex fugiat minima, non placeat quaerat quidem
                        repudiandae totam unde ut velit, veritatis vero voluptatem. Ab aliquid aperiam corporis cumque
                        doloribus est ex fugiat minima, non placeat quaerat quidem
                        repudiandae totam unde ut velit, veritatis vero voluptatem. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. A architecto fugit itaque neque nesciunt quidem vel. Architecto,
                        at commodi cum eius facere numquam odit omnis optio, perspiciatis quasi, reprehenderit
                        voluptatum.
                    </div>
                    <div className={styles['img-phone']}/>
                    <div className={styles['description-right-second']}>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab
                        aliquid aperiam corporis cumque doloribus est ex fugiat minima, non placeat quaerat quidem
                        repudiandae totam unde ut velit, veritatis vero voluptatem.Ab aliquid aperiam corporis cumque
                        doloribus est ex fugiat minima, non placeat quaerat quidem
                        repudiandae totam unde ut velit, veritatis vero voluptatem. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. A architecto fugit itaque neque nesciunt quidem vel. Architecto,
                        at commodi cum eius facere numquam odit omnis optio, perspiciatis quasi, reprehenderit
                        voluptatum.
                    </div>
                </div>
            </div>
        );
    }
};