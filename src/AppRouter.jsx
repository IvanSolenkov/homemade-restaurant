import { Redirect, Route, Switch } from "react-router";
import Home from './Components/Home/Home';
import About from './Components/About/About';


const AppRouter = () => {
    return (
        <div className="routing">
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
}

export default AppRouter;