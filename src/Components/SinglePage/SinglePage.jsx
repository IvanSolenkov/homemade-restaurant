import AsianFood from '../AsianFood/AsianFood';
import Cooking from '../Cooking/Cooking';
import Home from '../Home/Home';
import MeatAndFish from '../MeatAndFish/MeatAndFish';
import Menu from '../Menu/Menu';

const SinglePage = () => {
    return (
        <div className="single-page">
            <Home />
            <Menu />
            <Cooking />
            <AsianFood />
            <MeatAndFish />
        </div>
    );
}

export default SinglePage;