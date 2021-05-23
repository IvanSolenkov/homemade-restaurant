import Skill from "../Skill/Skill"
import styled from 'styled-components';

const Cooking = () => {
    const Number = styled.h1`
    background-color: green;
    `;

    return (
        <div className="cooking">
            <h1>Learn Cooking Online</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua
            </p>
            <h4>Image from <span>Freepik</span></h4>
            <div className="skills">
                <Skill number="1" title="Base Meals" />
                <Skill number="2" title="Knife Skills" />
                <Skill number="3" title="Cooking Chicken" />
            </div>
        </div>
    );
}

export default Cooking;