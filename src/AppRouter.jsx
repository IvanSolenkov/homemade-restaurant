import { Redirect, Route, Switch } from "react-router";
import Menu from "./Components/Menu/Menu";
import SinglePage from "./Components/SinglePage/SinglePage";
import Cooking from "./Components/Cooking/Cooking";
import AsianFood from "./Components/AsianFood/AsianFood";
import MeatAndFish from "./Components/MeatAndFish/MeatAndFish";


const AppRouter = () => {
    return (
        <div className="routing">
            <Switch>
                <Route path="/home" component={SinglePage} />
                <Route path="/menu" component={Menu} />
                <Route path="/cooking" component={Cooking} />
                <Route path="/asianfood" component={AsianFood} />
                <Route path="/meatfish" component={MeatAndFish} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
}

export default AppRouter;