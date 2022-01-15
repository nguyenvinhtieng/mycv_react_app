import React from "react";

function Education() {
    return (
        <section className="edu" id="education">
            <div className="edu__heading">Educations</div>
            <div className="edu__desc">Roadmap of my education</div>
            <div className="edu__content">
                <div className="line">
                    <div className="pass">pass</div>
                    <div className="line__item line__item-1">
                        <div className="line__item-time">2019</div>
                        <div className="line__item-content">
                            Graduated Phu Cat 3 high school
                        </div>
                    </div>
                    <div className="line__item line__item-2">
                        <div className="line__item-time">Today</div>
                        <div className="line__item-content">
                            Ton Duc Thang University
                        </div>
                    </div>
                    <div className="future">future</div>
                </div>
            </div>
        </section>
    );
}

export default Education;
