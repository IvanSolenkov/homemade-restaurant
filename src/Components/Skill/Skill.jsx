import LearnButton from "../LearnButton/LearnButton"

const Skill = (props) => {
    const number = props.number;
    const title = props.title;
    const className = props.className;

    return (
        <div className={className}>
            <h1 className="skill-num-head">{number}</h1>
            <h3 className="skill-title-head">{title}</h3>
            <p className="skill-paragraph">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
            </p>
            <LearnButton />
        </div>
    );
}

export default Skill;