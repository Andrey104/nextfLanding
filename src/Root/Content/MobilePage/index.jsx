import Welcome from './Welcome';
import Advantages from './Advantages';
import WhyMobile from './WhyMobile';
import CycleDev from './CycleDev';
import Portfolio from '../../../components/Portfolio';
import OrderBottom from '../../../components/OrderBottom';

export default class extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Welcome/>
                <Advantages/>
                <WhyMobile/>
                <CycleDev/>
                <Portfolio/>
                <OrderBottom/>
            </div>
        )
    }
};