import Welcome from './Welcome';
import Phone from './Phone';
import Laptop from './Laptop';
import Advantages from './Advantages';
import OurWork from './OurWork';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Welcome />
                <Phone />
                <Laptop />
                <Advantages />
                <OurWork />
            </div>
        )
    }
}