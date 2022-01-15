import Tooltip from "../Tooltip";
import {
    AiFillHome,
    AiFillSchedule,
    AiFillInfoCircle,
    AiFillProject,
    AiFillContacts,
} from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { useState } from "react";
let tabs = [
    { icon: <AiFillHome />, tooltip: "Home", active: true },
    { icon: <AiFillInfoCircle />, tooltip: "About", active: false },
    { icon: <AiFillSchedule />, tooltip: "Education", active: false },
    { icon: <FaBookOpen />, tooltip: "Knowledge", active: false },
    { icon: <AiFillProject />, tooltip: "Project", active: false },
    { icon: <AiFillContacts />, tooltip: "Contact", active: false },
];
function Tab() {
    const [reRender, setReRender] = useState(false);
    const reRenderTab = () => {
        setReRender(!reRender);
    };
    const handleChangeTabActive = (tabClick) => {
        tabs.map((tab) =>
            tab.tooltip === tabClick.tooltip
                ? (tab.active = true)
                : (tab.active = false)
        );
        reRenderTab();
    };
    return (
        <section className="tab">
            {tabs.map((tab, index) => (
                <Tooltip
                    key={index}
                    tab={tab}
                    handleChangeTabActive={handleChangeTabActive}
                />
            ))}
        </section>
    );
}

export default Tab;
