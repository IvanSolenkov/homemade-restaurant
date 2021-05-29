import meat from '../uploads/img/meat-fish/meat.jpeg';
import fish from '../uploads/img/meat-fish/fish.jpeg';

const MeatAndFish = () => {
    return (
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
    );
}

export default MeatAndFish;