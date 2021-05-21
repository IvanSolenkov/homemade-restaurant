import { Redirect, Route, Switch } from "react-router";
import About from './Components/About/About';
import SinglePage from "./Components/SinglePage/SinglePage";


const AppRouter = () => {
    return (
        <div className="routing">
            <Switch>
                <Route path="/home" component={SinglePage} />
                <Route path="/about" component={About} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
}

export default AppRouter;