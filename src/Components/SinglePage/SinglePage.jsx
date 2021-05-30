import AsianFood from '../AsianFood/AsianFood';
import Cooking from '../Cooking/Cooking';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Menu from '../Menu/Menu';
import FreshFood from '../FreshFood/FreshFood';

const SinglePage = () => {
    return (
        <div className="single-page">
            <Home />
            <Menu />
            <Cooking />
            <AsianFood />
            <Products />
            <FreshFood />
        </div>
    );
}

export default SinglePage;