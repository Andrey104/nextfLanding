import styles from './styles.scss';

import OneApp from './OneApp';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {content: 'all'};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    mobileApp = () => {
        this.setState({
            content: 'mobile'
        })
    };

    webApp = () => {
        this.setState({
            content: 'web'
        })
    };

    allApp = () => {
        this.setState({
            content: 'all'
        })
    };

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
        },];

    render() {
        const content = this.state.content;
        return (
            <div className={styles.container}>
                <div className={styles.title}>Портфолио</div>
                <div className={styles.buttons}>
                    <button
                        onClick={this.allApp}
                        className={content === 'all' ? styles['active-btn'] : undefined}>
                        Все
                    </button>
                    <button
                        className={content === 'mobile' ? styles['active-btn'] : undefined}
                        onClick={this.mobileApp}>
                        Приложения
                    </button>
                    <button
                        className={content === 'web' ? styles['active-btn'] : undefined}
                        onClick={this.webApp}>
                        Веб-сервисы
                    </button>
                </div>
                {content === 'all' && <div className={styles['apps-container']}>
                    <div className={styles.left}>
                        <OneApp app={this.apps[0]}/>
                        <OneApp app={this.apps[0]}/>
                    </div>
                    <div className={styles.right}>
                        <OneApp app={this.apps[1]}/>
                        <OneApp app={this.apps[1]}/>
                    </div>
                </div>}
                {content === 'web' && <div className={styles['apps-container']}>
                    <div className={styles.left}>
                        <OneApp app={this.apps[1]}/>
                        <OneApp app={this.apps[1]}/>
                    </div>
                    <div className={styles.right}>
                        <OneApp app={this.apps[0]}/>
                        <OneApp app={this.apps[0]}/>
                    </div>
                </div>}
                {content === 'mobile' && <div className={styles['apps-container']}>
                    <div className={styles.left}>
                        <OneApp app={this.apps[0]}/>
                        <OneApp app={this.apps[1]}/>
                    </div>
                    <div className={styles.right}>
                        <OneApp app={this.apps[1]}/>
                        <OneApp app={this.apps[0]}/>
                    </div>
                </div>}
            </div>
        );
    }
};