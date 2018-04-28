import AdvantageOne from './AdvantageOne';

import styles from './styles.scss';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.images = [1, 2, 3, 4, 5, 6, 7, 8];
        this.title = ['Приложение полностью ваше', '100% выполнение проектов', 'Гарантия и поддержка',
            'Персональный менеджер', 'От идеи до публикации', 'Выделенная команда'];
        this.content = ['Передаем все права на приложения', 'Дорабатываем приложение до тех пор, пока оно не будет работать точно как в ТЗ',
            'Тимлид, разработчики iOS/Anroid, дизайнер, аналитик, тестировщик, марркетолог', 'Консультации без ограничения по времени',
            'Выполняем полный цикл по созданию приложения. Публикуем в App Store и Google Play',
            'Тимлид, разработчики iOS/Anroid, дизайнер, аналитик, тестировщик, марркетолог'];

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
        const leftArray = this.advantages.slice(0, 3).map((adv, index) => <AdvantageOne key={index}
                                                                                        adv={adv}/>);
        const rightArray = this.advantages.slice(3, 7).map((adv, index) => <AdvantageOne key={index}
                                                                                         adv={adv}/>);
        return (
            <div className={styles['advantages-container']}>
                <div className={styles['title']}>Наши преимущества</div>
                <div className={styles['left-side']}>
                    {leftArray}
                </div>
                <div className={styles['right-side']}>
                    {rightArray}
                </div>
            </div>
        );
    }
}
