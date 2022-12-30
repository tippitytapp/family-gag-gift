import React
//, { useState } 
from "react";

function LoginContainer(props){
    // const [formValues, setformValues] = useState({name: "", password:""})

    return (
        <div className="initial-screen-container">
            <header className="initial-screen-header">
                <div className="initial-screen-header-defined">
                    Fancy meeting you here!! 
                    Tell me who you are from the dropdown below.
                </div>
            </header>
            <div className="initial-screen-body">
                <button className="step-button">Next {"\>"}</button>
            </div>
        </div>
    )
}

export default LoginContainer;