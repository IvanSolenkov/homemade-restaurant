import { ImageGroup, Image } from 'react-fullscreen-image'
import food1 from '../uploads/img/asian-food/asian-food1.jpeg';
import food2 from '../uploads/img/asian-food/asian-food2.jpeg';
import food3 from '../uploads/img/asian-food/asian-food3.jpeg';
import meat from '../uploads/img/meat-fish/meat.jpeg';
import fish from '../uploads/img/meat-fish/fish.jpeg';

const AsianFood = () => {
    const images = [
        food1,
        food2,
        meat,
        fish,
        food3,
    ]

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

            <ImageGroup>
                <ul className="images">
                    {images.map(i => (
                        <li key={i}>
                            <Image
                                src={i}
                                alt="food"
                                style={{
                                    height: '400px',
                                    width: '350px',
                                    objectFit: 'cover',
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </ImageGroup>
        </div>
    );
}

export default AsianFood;