import { useRef, useEffect } from "react";
import Home from "../Home";
import About from "../About";
import Education from "../Education";
import Knowledge from "../Knowledge";
import Project from "../Project";
import Contact from "../Contact";
function Content() {
    const contentRef = useRef();
    useEffect(() => {
        // console.log(contentRef);
        const handleScrollEvent = (e) => {
            // console.log(e.target);
        };
        contentRef.current.addEventListener("scroll", handleScrollEvent);
    }, []);
    return (
        <section ref={contentRef} className="content" id="content">
            <Home />
            <About />
            <Education />
            <Knowledge />
            <Project />
            <Contact />
        </section>
    );
}

export default Content;
