import { useEffect, useRef } from "react";
function Tooltip({ tab, handleChangeTabActive }) {
    let myRef = useRef();
    // let url = window.location.href;
    // let args = url.split("#");
    // let item = args[args.length - 1];
    let tabName = tab.tooltip.toLowerCase();
    let className = "tab__item";
    if (tab.active) className += " active";
    useEffect(() => {
        myRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);
    // console.log(scrollIntoView);
    const handleClickTab = () => {
        // scrollIntoView(`${tabName}`, {
        //     behavior: "smooth",
        //     scrollMode: "if-needed",
        // });
        handleChangeTabActive(tab);
    };
    return (
        <a
            href={`#${tabName}`}
            className={className}
            ref={myRef}
            onClick={() => handleClickTab()}
        >
            <div className="tab__item-icon">{tab.icon}</div>
            <div className="tab__item-tooltip">{tab.tooltip}</div>
        </a>
    );
}

export default Tooltip;
