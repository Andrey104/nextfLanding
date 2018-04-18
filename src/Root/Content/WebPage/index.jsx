import Welcome from './Welcome';
import Advantages from './Advantages';
import WhatWeCan from './WhatWeCan';

export default class extends React.Component {

    render() {
        return (
            <div>
                <Welcome/>
                <Advantages/>
                <WhatWeCan/>
            </div>
        )
    }
};