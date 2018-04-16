import Header from './Header'
import Content from './Content'
import styles from './styles.scss'

export default class extends React.Component {


    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div style={styles}>
                <Header/>
                <Content/>
            </div>
        )
    }

}