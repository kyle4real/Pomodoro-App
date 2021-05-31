const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <h1>Pomodoro.</h1>

                <p>
                    <i className="fas fa-level-up-alt fa-rotate-90"></i>time management technique
                </p>
            </div>
            <div className="links">
                <a href="/">Settings</a>
                <a href="/">About</a>
            </div>
        </div>
    );
};

export default Navbar;
