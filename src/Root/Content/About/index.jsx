import Inputmask from "inputmask";
import axios from 'axios';


import styles from './styles.scss';

export default class extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        var im = new Inputmask("+7(999)-999-99-99");
        im.mask(this.refs.phone);
    }

    send = async () => {
        try {
            const response = await axios.post('/form', {
                name: this.refs.name.value,
                email: this.refs.email.value,
                phone: this.refs.phone.value,
                comment: this.refs.comment.value,
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div className={styles.container}>
                <iframe className={styles.map}
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad94d8ca207b951c6aa4572c2a810702ad7b384d67c9d40c9a455fb35c51f6f39&amp;source=constructor"
                        width="100%" height="655" frameBorder="0"/>
                <div className={styles['no-map']}>Идет загрузка карты</div>
                <div className={styles.title}>Контакты</div>
                <div className={styles['container-center']}>
                    <div className={styles.contacts}>
                        <div className={styles.phone}>+7(499)229-30-39</div>
                        <div className={styles.address}>Москва, Большая почтовая 36с8</div>
                        <div className={styles.email}>info@next.ru</div>
                    </div>
                    <div className={styles.description}>Свяжитесь с нами любым удобным способом,
                        мы ответим на все ваши вопросы и рассчитаем приблизительную стоимость реализации проекта
                    </div>
                </div>
                <div id={'form'} className={styles.form}>
                    <div className={styles['title-form']}>Оставьте заявку и мы свяжемся с вами</div>
                    <input ref={'name'} placeholder={'Имя'} className={styles.inpt}/>
                    <input ref={'email'} placeholder={'E-mail'} className={styles.inpt}/>
                    <input ref={'phone'} placeholder={'Телефон'} className={styles.inpt}/>
                    <textarea ref={'comment'} id={'comment'} placeholder={'Комментарий'} className={styles['input-comment']}/>
                    <button onClick={this.send} className={styles.btn}>Отправить заявку</button>
                </div>
            </div>
        );
    }
}