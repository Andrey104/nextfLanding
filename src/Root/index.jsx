import Header from './Header'
import Content from './Content'

export default class extends React.Component {


    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }

}