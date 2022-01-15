import my_pic from "../../images/my_pic.jpg";
function About() {
    return (
        <section className="about" id="about">
            <div className="about__heading">About</div>
            <div className="about__info">
                <div className="about__img">
                    <img src={my_pic} alt="" />
                </div>
                <div className="about__info-data">
                    <strong>Name</strong>: Nguyễn Vinh Tiếng (Vinh's Tieng){" "}
                    <br />
                    <strong>DoB</strong>: 18/11/2001 <br />
                    <strong>Sex</strong>: male <br />
                    <strong>Strength point: </strong>Seft study, Teamwork...{" "}
                    <br />
                    <strong>Weakness point: </strong>Too perfectionist and
                    introverted <br />
                    <strong>Hobby</strong>: Coding, playing game, watching
                    movies...
                </div>
            </div>
            <div className="about__desc">
                <strong>Intro:</strong> <br /> I am a 3rd year student majoring
                in information technology, with the current goal of being able
                to acquire and improve my knowledge and experience. I am always
                trying to explore and learn new things. Personal qualities:
                Self-discipline, learning ability, sense of responsibility, high
                discipline.
            </div>
        </section>
    );
}

export default About;
