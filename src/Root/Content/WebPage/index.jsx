import Welcome from './Welcome';
import Advantages from './Advantages';
import WhatWeCan from './WhatWeCan';
import MobileSite from './MobileSite';
import OurWork from '../MainPage/OurWork';
import Portfolio from '../../../components/Portfolio';
import OurClients from '../../../components/OurClients';
import OrderBottom from '../../../components/OrderBottom';

export default class extends React.Component {

    render() {
        return (
            <div>
                <Welcome/>
                <Advantages/>
                <WhatWeCan/>
                <MobileSite />
                <OurWork />
                <Portfolio />
                <OurClients />
                <OrderBottom />
            </div>
        )
    }
};