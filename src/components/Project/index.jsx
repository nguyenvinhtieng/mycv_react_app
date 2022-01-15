import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "../../projects";
import ProjectItem from "../ProjectItem";
function Project() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className="project" id="project">
            <div className="project__heading">My Projects</div>
            <div className="project__content">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <ProjectItem key={index} project={project} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Project;
