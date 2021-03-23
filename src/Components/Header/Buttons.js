import React, { useState } from "react";
import "./Buttons.css";
import {Link} from 'react-router-dom';

const Buttons = ({ activities }) => {
    const [activeBtn, setActiveBtn] = useState("")
   
    const activeActivity = (index) => {
        setActiveBtn(index)
        console.log(activeBtn)
    }

    return(
        <div className="buttons">
            {activities &&
                activities.map((activity, index) => (
                    <Link to={{pathname: `${activity.URL}`}} style={{ textDecoration: 'none', color: 'white' }}>
                    <div
                        className={index === activeBtn ? "btn-form-active" : "btn-form"} 
                        key={activity.id}
                        onClick={() => activeActivity(index)}  
                        >
                            <li className="button">{activity.name}</li>
                    </div>
                    </Link>
                ))
            }   
        </div>
    )
}

export default Buttons;