import LearnButton from "../LearnButton/LearnButton"

const Skill = (props) => {
    const number = props.number;
    const title = props.title;

    return (
        <div className="skill">
            <h1>{number}</h1>
            <h3>{title}</h3>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
            </p>
            <LearnButton />
        </div>
    );
}

export default Skill;