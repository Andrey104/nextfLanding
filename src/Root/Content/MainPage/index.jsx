import Welcome from './Welcome';
import Phone from './Phone';
import Laptop from './Laptop';
import Advantages from './Advantages';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Welcome />
                <Phone />
                <Laptop />
                <Advantages />
            </div>
        )
    }
}