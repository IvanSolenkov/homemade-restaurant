const Menu = () => {
    return (
        <div className="menu">
            <iframe id="video1" title="Homemade Desserts" width="450" height="350" src="https://www.youtube.com/embed/KLiBlO1pXVU"></iframe>
            <div className="rectangle-div"></div>
            <div className="menu-elements">
                <h1>Menu</h1>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button>Learn More</button>
            </div>
            <iframe id="video2" title="Homemade Desserts" width="450" height="350" src="https://www.youtube.com/embed/XXQvtSlxv5s"></iframe>
        </div>
    );
}

export default Menu;