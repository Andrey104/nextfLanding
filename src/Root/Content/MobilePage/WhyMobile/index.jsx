import styles from './styles.scss';


export default class extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>Зачем вам мобильное приложение</div>
                <div className={styles['title-description']}>Уже сегодня трафик с мобильных устройств достиг более 50%</div>
                <div className={styles['title-description']}>Мобильные приложения принесут вашему бизнесу:</div>
                <div className={styles['img-container']}>
                    <div className={styles['img-1']}>
                        <div className={styles['img-title']}>Допродажи</div>
                        <div className={styles['img-description']}>Как правило, после установки мобильного приложение количествоповторных продаж увеличивается на 37%</div>
                    </div>
                    <div className={styles['img-2']}>
                        <div className={styles['img-title']}>Узнаваемость</div>
                        <div className={styles['img-description']}>96% ваших конкурентов не имеют мобильного приложения. Уникальная возможность рекламироваться в высококонкурентной среде</div>
                    </div>
                    <div className={styles['img-3']}>
                        <div className={styles['img-title']}>Доступность</div>
                        <div className={styles['img-description']}>Мобильное приложение с вашими товарами и услугами находится у клиентов 24 часа в сутке даже в оффлайн</div>
                    </div>
                    <div className={styles['img-4']}>
                        <div className={styles['img-title']}>Автоматизация</div>
                        <div className={styles['img-description']}>Современные мобильные приложения позволяют минимизировать участие человека в процессе продажи, тем самым экономя ваши средства</div>
                    </div>
                    <div className={styles['img-5']}>
                        <div className={styles['img-title']}>Напоминание</div>
                        <div className={styles['img-description']}>Болеее 90% клиентов открывают приложение, когда видят push-уведомления с акциями push-уведомления с акциями</div>
                    </div>
                    <div className={styles['img-6']}>
                        <div className={styles['img-title']}>Лояльность</div>
                        <div className={styles['img-description']}>Благодаря мобильным приложениям становятся доступными персональные скидки и предложения для ваших клиентов</div>
                    </div>
                </div>
            </div>
        )
    }
};