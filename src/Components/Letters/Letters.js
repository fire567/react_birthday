import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import agony from "../../accets/poem_img/agony.PNG"

const Letters = ({items}) => {
    const [index, setIndex] = useState(0)

    const itemIndex = (index) => {
        setIndex(index)
    }
    //console.log(items[1].url)

    return (
        <div>
            <Sidebar items={items} changeindex={itemIndex}/>
            <div className="content">
            {items &&
             <img src={items[index].url}  alt="picture"/> 
            }
           
                
            </div>
        </div>
    );
};

export default Letters;