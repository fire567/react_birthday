import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({items, changeindex}) => {
    const [ currentItem, setCurrentItem] = useState(0)

    const changeCurrentItem = (index) => {
        setCurrentItem(index);
        changeindex(index);
    }

    return(
        <div className="sidebar-form">
            <div className="content">
                {items &&
                    items.map((item, index) => (
                    <div className="item">
                        <div 
                            className={currentItem === index ? "button-item-active" : "button-item"}
                            onClick={() => changeCurrentItem(index)}
                        >{item.name}
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;