function Home() {
    return (
        <section className="home" id="home">
            <h1 className="home__heading">
                My <span className="home__heading-text"> CV</span>
            </h1>
            <div className="home__desc">Hello welcome to my website</div>
            <div className="home__intro">What's on this website? </div>
            <div className="home__menu-list">
                <div className="home__menu-item">
                    <h1>About me</h1>
                    <p>More info about me</p>
                </div>
                <div className="home__menu-item">
                    <h1>My project</h1>
                    <p>Many of my projects are shown below </p>
                </div>
                <div className="home__menu-item">
                    <h1>Contact</h1>
                    <p>Contact me for work </p>
                </div>
            </div>
            <div className="home__bottom">Let's get started!</div>
        </section>
    );
}

export default Home;
