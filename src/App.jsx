// import { useEffect, useRef } from "react";
import Tab from "./components/Tab";
import Content from "./components/Content";
function App() {
    // let contentRef = useRef();
    // useEffect(() => {
    //     const windowScrollEvent = (e) => {
    //         console.log(e);
    //     };
    //     console.log(contentRef);
    //     contentRef.current.addEventListener("scroll", windowScrollEvent);
    //     // return () => {
    //     //     contentRef.current.removeEventListener("scroll", windowScrollEvent);
    //     // };
    // }, []);
    return (
        <main>
            <section className="main">
                <Tab />
                <Content />
            </section>
            <div className="c-1"></div>
            <div className="c-2"></div>
            <div className="c-3"></div>
        </main>
    );
}
//362FE4
// linear-gradient( to right top, #65dfc9, #6cdbeb)
// backdrop-filter: blur(2rem)

export default App;
