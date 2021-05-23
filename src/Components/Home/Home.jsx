import LearnButton from "../LearnButton/LearnButton"

const Home = () => {
    return (
        <div className="home">
            <div className="home-elements">
                <h1>
                    Homemade
                <br />
                Restaurant
            </h1>
                <p>
                    Uis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur Image from <span>Freepik</span>.
                </p>
                <LearnButton />
            </div>
        </div>
    );
}

export default Home;