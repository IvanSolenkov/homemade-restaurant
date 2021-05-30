import * as ImIcons from 'react-icons/im';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';

const FreshFood = () => {
    return (
        <div className="fresh-food">
            <div className="fresh-items">
                <h3>Fresh Food Everyday</h3>
                <p>
                    Our Restaurant is a family-owned restaurant that has been proudly
                    serving around the 1940s located on the corner of Broadway and West
                    112th Street in New York, <span>learn more</span>.
                </p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100044530309410">
                        <ImIcons.ImFacebook id="special-icon" />
                    </a>

                    <a href="https://www.instagram.com/ivansolenkov99/">
                        <SiIcons.SiInstagram id="special-icon" />
                    </a>

                    <a href="https://github.com/IvanSolenkov">
                        <ImIcons.ImGithub id="special-icon" />
                    </a>

                    <a href="https://www.linkedin.com/in/ivan-solenkov-7544211ba/">
                        <ImIcons.ImLinkedin2 id="special-icon" />
                    </a>
                </div>
            </div>

            <div className="menu-icons">
                <div>
                    <MdIcons.MdRestaurantMenu id="menu-icon" />
                    <h4>Our Menu</h4>
                </div>
                <div>
                    <GiIcons.GiCookingPot id="menu-icon" />
                    <h4>Specials</h4>
                </div>
                <div>
                    <GiIcons.GiCoffeeCup id="menu-icon" />
                    <h4>Drinks</h4>
                </div>
            </div>
        </div>
    );
}

export default FreshFood;