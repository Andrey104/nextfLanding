import {Route, Switch} from "react-router-dom";

import MainPage from './MainPage';
import WebPage from './WebPage';
import MobilePage from './MobilePage';
import About from './About';
import Portfolio from './Portfolio';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/web' component={WebPage}/>
                    <Route exact path='/mobile' component={MobilePage}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/portfolio' component={Portfolio}/>
                </Switch>
            </div>
        )
    }
}