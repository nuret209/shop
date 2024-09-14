import { useState } from "react";
function Tab({ children, defaultTab, a }) {

    const [active, setactive] = useState(defaultTab);
    return (
        <>
            {children.map((tab, index) => <div key={index} className={tab.props.class} id={active === index ? "active" : ""} onClick={() => { setactive(index); a(index + 1) }}>{tab.props.children}</div >)
            }
        </>
    )
}
Tab.Panel = function () { return <></> }
export default Tab