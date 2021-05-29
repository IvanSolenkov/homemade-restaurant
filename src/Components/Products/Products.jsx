import meat from '../uploads/img/meat-fish/meat.jpeg';
import fish from '../uploads/img/meat-fish/fish.jpeg';
import product1 from '../uploads/img/farm-products/farm-product.jpg';
import product2 from '../uploads/img/farm-products/farm-product2.jpg';
import LearnButton from '../LearnButton/LearnButton';


const Products = () => {
    return (
        <div className="products">
            <div className="meat-fish">
                <img src={meat} alt="meat" />
                <div className="headers">
                    <div>
                        <h2>
                            M
                    <br />
                    E
                    <br />
                    A
                    <br />
                    T
                   </h2>
                        <h2>
                            F
                    <br />
                    I
                    <br />
                    S
                    <br />
                    H
                   </h2>
                    </div>
                    <h2>AND</h2>
                </div>
                <img src={fish} alt="fish" />
            </div>

            <div className="farm-products">
                <img src={product1} alt="product1" />
                <img src={product2} alt="product2" />
                <div className="product-text">
                    <h3>Farm Products</h3>
                    <p>
                        The use of local farm products lorem ipsum dolor sit amet, consectetur
                        adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                    </p>
                    <LearnButton />
                </div>
            </div>
        </div>
    );
}

export default Products;