import { Redirect, Route, Switch } from "react-router";
import Menu from "./Components/Menu/Menu";
import SinglePage from "./Components/SinglePage/SinglePage";
import Cooking from "./Components/Cooking/Cooking";


const AppRouter = () => {
    return (
        <div className="routing">
            <Switch>
                <Route path="/home" component={SinglePage} />
                <Route path="/menu" component={Menu} />
                <Route path="/cooking" component={Cooking} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
}

export default AppRouter;