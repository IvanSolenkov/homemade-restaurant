import food1 from '../uploads/img/asian-food/asian-food1.jpeg';
import food2 from '../uploads/img/asian-food/asian-food2.jpeg';
import food3 from '../uploads/img/asian-food/asian-food3.jpeg';

const AsianFood = () => {
    return (
        <div className="asian-food">
            <div className="food-text">
                <div className="asian">
                    <h2>Asian</h2>
                    <p>
                        While it is important to have naturally occurring sugars in your diet,
                        many foods contain harmful added sugars that contain no nutritional value.
                </p>
                </div>

                <div className="food">
                    <h2>Food</h2>
                    <p>
                        While it is important to have naturally occurring sugars in your diet,
                        many foods contain harmful added sugars that contain no nutritional value.
                </p>
                </div>
            </div>

            <div className="food-images">
                <img src={food1} alt="food1" />
                <img src={food2} alt="food2" />
                <img src={food3} alt="food3" />
            </div>

        </div>
    );
}

export default AsianFood;