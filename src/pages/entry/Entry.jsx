import { useState } from "react";
import Login from "./components/Login";
import "./Entry.css"
import Register from "./components/Register";

function Entry(){

    const [ section, setSection ] = useState("login");

    return(
        <div className="entry-page">
            <div className="main-section">
                <img className="h-logo" src="public/HorizontalLogo.png" />
                {section == "login" ? <Login /> : <Register />}
                <p className="mini-text">
                    {section == "login" ? 
                        <>Doesn't have a account? <span onClick={() => setSection("register")}>Register here</span></>
                    :
                        <>Already have a account? <span onClick={() => setSection("login")}>Sing in</span></>
                    }
                </p>
            </div>
        </div>
    )
}

export default Entry;