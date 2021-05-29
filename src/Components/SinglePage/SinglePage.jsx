import AsianFood from '../AsianFood/AsianFood';
import Cooking from '../Cooking/Cooking';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Menu from '../Menu/Menu';

const SinglePage = () => {
    return (
        <div className="single-page">
            <Home />
            <Menu />
            <Cooking />
            <AsianFood />
            <Products />
        </div>
    );
}

export default SinglePage;