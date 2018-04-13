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
                <div className={styles['title']}>Вам подходит итеративная Agile-модуль разработки, если:</div>
                <ul className={styles['list']}>
                    <li>
                        <span>Потребности вашег опроекта постоянно меняются, и вы хотите вносить изменения в процессе его создания.</span>
                    </li>
                    <li className={styles['element-list']}>
                        <span>Разрабатываемый проект довольно крупный, растянут по времени, и точное планирование невозможно.</span>
                    </li>
                    <li className={styles['element-list']}>
                        <span>Вы готовы активно взаимодействовать с командой и быть максимально вовлечены в процесс разработки.</span>
                    </li>
                    <li className={styles['element-list']}>
                        <span>Есть необходимость в конце каждого спринта получать промежуточную рабочую версию продукта.</span>
                    </li>
                    <li className={styles['element-list']}>
                        <span>Требуется быстрый старт проекта: на начальном этапе достаточно лишь небольшого планирования.</span>
                    </li>
                </ul>
            </div>
        )
    }
}