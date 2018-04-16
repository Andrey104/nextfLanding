import styles from './styles.scss';
import OneApp from './OneApp';

export default class extends React.Component {
    apps = [
        {
            title: 'SLOWDIVE',
            description: 'Медитация с помощью Slowdive - одно удовольствие. Множество управляемых медитаций, музыки и многое другое внутри.',
            image: 1,
            icons: {android: true, pc: true, apple: true}
        }];

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>Портфолио</div>
                <div className={styles.description}>Мы не ограничиваем себя лишь мобильными приложениями, стараясь
                    постоянно развиваться в новых направлениях.
                    Наша задача - максимальное соблюдение поставленных сроков и желаний наших заказчиков.
                </div>
                <div className={styles['container-apps']}>
                        <OneApp app={this.apps[0]} left={true}/>
                        <OneApp app={this.apps[0]}/>
                        <OneApp app={this.apps[0]} left={true}/>
                        <OneApp app={this.apps[0]}/>
                </div>
                <button className={styles.button}>Больше наших работ</button>
            </div>
        );
    }
}