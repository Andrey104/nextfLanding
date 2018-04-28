import styles from './styles.scss';
import OneApp from './OneApp';

export default class extends React.Component {
    apps = [
        {
            title: 'SLOWDIVE',
            description: 'Медитация с помощью Slowdive - одно удовольствие. Множество управляемых медитаций, музыки и многое другое внутри.',
            image: 1,
            icons: {android: true, pc: true, apple: true}
        },
        {
            title: 'SLOWDIVE',
            description: 'Медитация с помощью Slowdive - одно удовольствие. Множество управляемых медитаций, музыки и многое другое внутри.',
            image: 2,
            icons: {android: true, pc: true, apple: false}
        },
        {
            title: 'SLOWDIVE',
            description: 'Медитация с помощью Slowdive - одно удовольствие. Множество управляемых медитаций, музыки и многое другое внутри.',
            image: 3,
            icons: {android: true, pc: true, apple: true}
        },
        {
            title: 'SLOWDIVE',
            description: 'Медитация с помощью Slowdive - одно удовольствие. Множество управляемых медитаций, музыки и многое другое внутри.',
            image: 4,
            icons: {android: true, pc: true, apple: true}
        }];

    render() {
        const page = this.props.page;
        return (

            <div className={styles.container}>
                <div className={styles.title}>Портфолио</div>
                <div className={styles.description}>Мы не ограничиваем себя лишь мобильными приложениями, стараясь
                    постоянно развиваться в новых направлениях.
                    Наша задача - максимальное соблюдение поставленных сроков и желаний наших заказчиков.
                </div>
                {page === 'main' && <div className={styles['container-apps']}>
                    <OneApp app={this.apps[0]} left={true}/>
                    <OneApp app={this.apps[1]}/>
                    <OneApp app={this.apps[2]} left={true}/>
                    <OneApp app={this.apps[3]}/>
                </div>}
                {page === 'mobile' && <div className={styles['container-apps']}>
                    <OneApp app={this.apps[1]} left={true}/>
                    <OneApp app={this.apps[0]}/>
                    <OneApp app={this.apps[3]} left={true}/>
                    <OneApp app={this.apps[2]}/>
                </div>}
                {page === 'web' && <div className={styles['container-apps']}>
                    <OneApp app={this.apps[3]} left={true}/>
                    <OneApp app={this.apps[2]}/>
                    <OneApp app={this.apps[0]} left={true}/>
                    <OneApp app={this.apps[1]}/>
                </div>}
                <button className={styles.button}>Больше наших работ</button>
            </div>
        );
    }
}