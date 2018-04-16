import styles from './styles.scss';

export default class extends React.Component {

    render() {
        return (
            <div className={styles['container']}>
                <div className={styles['image']}>
                    <div className={styles['image-order']}>
                        <span className={styles['signature']}>Заявка</span>
                    </div>
                    <div className={styles['image-analysis']}>
                        <span className={styles['signature']}>Анализ</span>
                    </div>
                    <div className={styles['image-contract']}>
                        <span className={styles['signature']}>Договор</span>
                    </div>
                    <div className={styles['image-development']}>
                        <span className={styles['signature']}>Разработка</span>
                    </div>
                    <div className={styles['image-test']}>
                        <span className={styles['signature']}>Тестирование</span>
                    </div>
                    <div className={styles['image-start']}>
                        <span className={styles['signature']}>Запуск</span>
                    </div>
                </div>
                <div className={styles['description']}/>
                <div className={styles['title']}>Вам подходит Fixed Cost модель разработки, если:</div>
                <ul className={styles['list']}>
                    <li>
                        <span>Требуется удобная система отчетности с возможностью отслеживать ресурсы, затраченное время и финансы</span>
                    </li>
                    <li className={styles['element-list']}>
                        <span>Есть четко сформулированные требования к продукту, и вы не намерены вносить изменения по ходу работ.</span>
                    </li>
                    <li className={styles['element-list']}>
                        <span>Вы сторонник фиксированной стоимости продукта и полной документации.</span>
                    </li>
                    <li className={styles['element-list']}>
                        <span>У вас нет возможности постоянно привлекаться к непосредственному этапу разработки.</span>
                    </li>
                    <li className={styles['element-list']}>
                        <span>Нет ограничений во времени и ресурсах создания продукта.</span>
                    </li>
                </ul>
            </div>
        )
    }
}