import styles from './styles.scss';

export default class extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>Полный цикл разработки мобильных приложений на заказ</div>
                <div className={styles.iphone}>
                    <div className={styles['iphone-img-1']}/>
                    <div className={styles['iphone-img-2']}/>
                    <div className={styles['iphone-img-3']}/>
                    <div className={styles['descr-iphone']}>
                        <div className={styles['chapter']}>
                            <div className={styles['img-title']}>
                                Проектирование
                            </div>
                            <div className={styles['img-description']}>
                                Проектирование - один из наиболее важных этапов работы.
                                Наша задача - выработать концепцию проекта, оределить и сформулировать единое видение
                                конечного результата
                            </div>
                        </div>
                        <div className={styles['chapter']}>
                            <div className={styles['img-title']}>
                                Дизайн и интерфейс
                            </div>
                            <div className={styles['img-description']}>
                                Одним из важных этапов разработки является проектирование пользовательского интерфейса,
                                разработкадизайн-концепции и создание макетов
                            </div>
                        </div>
                        <div className={styles['chapter']}>
                            <div className={styles['img-title']}>
                                Реализация решений для iOs и Android
                            </div>
                            <div className={styles['img-description']}>
                                Разрабатываем приложения для устройств на iOS и Android
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.samsung}>
                    <div className={styles['samsung-img-1']}/>
                    <div className={styles['samsung-img-2']}/>
                    <div className={styles['samsung-img-3']}/>
                    <div className={styles['samsung-descr']}>
                        <div className={styles['chapter']}>
                            <div className={styles['img-title']}>
                                Разработка сервера приложения
                            </div>
                            <div className={styles['img-description']}>
                                Создаем серверное программное обеспечение, где хранится база данных и реализована вся
                                логика
                                приложения
                            </div>
                        </div>
                        <div className={styles['chapter']}>
                            <div className={styles['img-title']}>
                                Тестирование
                            </div>
                            <div className={styles['img-description']}>
                                Тестируем ваше приложение на всех необходимых устройствах и исправляем ошибки
                            </div>
                        </div>
                        <div className={styles['chapter']}>
                            <div className={styles['img-title']}>
                                Поддержка и развитие
                            </div>
                            <div className={styles['img-description']}>
                                Развиваем проект, исправляем ошибки, отвечаем ан вопросы пользователей
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}