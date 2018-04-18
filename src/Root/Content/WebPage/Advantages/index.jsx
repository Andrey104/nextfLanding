import AdvantageOneLeft from './AdvantageOneLeft';
import AdvantageOneRight from './AdvantageOneRight';

import styles from './styles.scss';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.images = [1, 2, 3, 4, 5, 6];
        this.title = ['Минимальные сроки', 'Адаптивный дизайн', 'Аналитика',
            'Доступные цены ', 'Надежная поддержка', 'Постоянное развитие'];
        this.content = ['Передаем все права на приложения', 'Дорабатываем приложение до тех пор, пока оно не будет работать точно как в ТЗ',
            'Тимлид, разработчики iOS/Anroid, дизайнер, аналитик, тестировщик, марркетолог', 'Консультации без ограничения по времени',
            'Юридическое лицо(ООО и ИП)', 'Выполняем полный цикл по созданию приложения. Публикуем в App Store и Google Play'];

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
                <button className={styles['btn-order']}>Оставить заявку</button>
                <div className={styles['line']} />
            </div>
        );
    }
}
