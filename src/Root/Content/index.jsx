import Welcome from '../../components/Welcome';
import Phone from '../../components/Phone';
import Laptop from '../../components/Laptop';

export default class extends React.Component {
    render() {
        return (
            <div>
               <Welcome />
               <Phone />
               <Laptop />
            </div>
        )
    }
}