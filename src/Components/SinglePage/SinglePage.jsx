import Cooking from '../Cooking/Cooking';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';

const SinglePage = () => {
    return (
        <div className="single-page">
            <Home />
            <Menu />
            <Cooking />
        </div>
    );
}

export default SinglePage;