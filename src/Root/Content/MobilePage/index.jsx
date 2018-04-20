import Welcome from './Welcome';
import Advantages from './Advantages';
import WhyMobile from './WhyMobile';

export default class extends React.Component {

    render() {
        return (
            <div>
                <Welcome/>
                <Advantages/>
                <WhyMobile/>
            </div>
        )
    }
};