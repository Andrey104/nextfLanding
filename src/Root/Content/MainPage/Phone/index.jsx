import {Link} from 'react-router-dom'

import styles from './styles.scss'


export default class extends React.Component {
    render() {
        return (
            <Link to='/mobile'>
                <div className={styles['container-iphone']}>
                    <div className={styles['image-load']}/>
                    <div className={styles['iphone']}/>
                    <div className={styles['iphone-hover']}/>
                    <div className={styles['title-iphone']}>Мобильные приложения</div>
                    <div className={styles['description-iphone']}>Разрабатываем приложения для всех типов устройств
                    </div>
                </div>
            </Link>
        )
    }
}