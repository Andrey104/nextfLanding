import AdvantageOneLeft from './AdvantageOneLeft';
import AdvantageOneRight from './AdvantageOneRight';

import styles from './styles.scss';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.images = [1, 2, 3, 4, 5, 6];
        this.title = ['Большой опыт', 'Наполнение контентом', 'Публикация AppStore и Google Play',
            'Аналитика', 'Полный цикл разработки', 'Внедрение платежных систем'];
        this.content = ['Разрабатываем под iOS и Android на протяжении года', 'Поможем наполнить приложение вашими данными',
            'Кто бы мог подумать, но это бесплатно!', 'Подключим мощную систему аналитики, настроенную для вашего заказа',
            'От проработки концепции до запуска приложения', 'Оплата будет возможна прямо из приложения'];

        this.advantages = this.getElement();
    }

    getElement() {
        let objects = [];
        for (let i = 0; i < 6; i++) {
            objects.push({
                image: this.images[i],
                title: this.title[i],
                content: this.content[i]
            })
        }
        return objects;
    }


    render() {
        const leftArray = this.advantages.slice(0, 3).map((adv, index) => <AdvantageOneLeft key={index}
                                                                                        adv={adv}/>);
        const rightArray = this.advantages.slice(3, 7).map((adv, index) => <AdvantageOneRight key={index}
                                                                                         adv={adv}/>);
        return (
            <div className={styles['advantages-container']}>
                <div className={styles['left-side']}>
                    {leftArray}
                </div>
                <div className={styles['right-side']}>
                    {rightArray}
                </div>
                <div className={styles['line']} />
            </div>
        );
    }
}
