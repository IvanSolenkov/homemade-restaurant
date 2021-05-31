import meat from '../uploads/img/menu/meat.jpg';
import coffee from '../uploads/img/menu/coffee.jpg';

const Menu = () => {
    return (
        <div className="menu">
            <div className="meat-img">
                <img src={meat} alt="meat" />
            </div>
            <div className="rectangle-div"></div>
            <div className="menu-elements">
                <h1>Menu</h1>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button>Learn More</button>
            </div>
            <div className="coffee-img">
                <img src={coffee} alt="coffee" />
            </div>
        </div>
    );
}

export default Menu;