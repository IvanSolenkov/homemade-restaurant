import styled from "styled-components";
import Skill from "../Skill/Skill"

const Cooking = () => {
    const BaseMeals = styled(Skill)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    padding: 20px 20px;
    margin-right: 20px;
    font-family: 'Roboto Slab', serif;
    `;

    const KnifeSkills = styled(Skill)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: orangered;
    padding: 20px 20px;
    margin-right: 20px;
    font-family: 'Roboto Slab', serif;
    `;

    const CookingChicken = styled(Skill)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: crimson;
    padding: 20px 20px;
    margin-right: 20px;
    font-family: 'Roboto Slab', serif;
    `;

    return (
        <div className="cooking">
            <h1 className="cooking-head">Learn Cooking Online</h1>
            <p className="cooking-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua
            </p>
            <h4>Image from <span>Freepik</span></h4>
            <div className="skills">
                <BaseMeals number="1" title="Base Meals" />
                <KnifeSkills number="2" title="Knife Skills" />
                <CookingChicken number="3" title="Cooking Chicken" />
            </div>
        </div>
    );
}

export default Cooking;