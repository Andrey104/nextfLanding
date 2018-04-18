import Header from './Header'
import Content from './Content'
import Footer from './Footer'

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
                <Footer />
            </div>
        )
    }

}