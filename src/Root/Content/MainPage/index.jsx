import Welcome from './Welcome';
import Phone from './Phone';
import Laptop from './Laptop';
import Advantages from './Advantages';
import OurWork from './OurWork';
import OurClients from '../../../components/OurClients';
import OrderBottom from '../../../components/OrderBottom';
import Portfolio from '../../../components/Portfolio';

export default class extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Welcome />
                <Phone />
                <Laptop />
                <Advantages />
                <OurWork />
                <Portfolio />
                <OurClients />
                <OrderBottom />
            </div>
        )
    }
}