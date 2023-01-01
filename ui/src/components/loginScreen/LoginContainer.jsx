import React, { useState } from "react";
import { useEffect } from "react";
import { fetchNames, fetchUser } from "../../actions/peopleActions";
function LoginContainer(props){
    const [formValue, setformValues] = useState("Select...")
    const [names, setNames] = useState([{goesBy: "Select...", name: "Select"}])
    const [called, setCalled] = useState(false)
    const [dataToValidate, setDataToValidate] = useState({})
    const _fetchName = async () => await fetchNames()
    const _fetchUser = async (name) => await fetchUser(name)
    useEffect(()=>{
        let updatedNames = names
       if(!called)  {setCalled(true);_fetchName().then(resp =>{updatedNames = updatedNames.concat(resp) ; console.log(updatedNames);setNames(updatedNames)})}
    },[])

    const handleChange = (e) => {
        e.preventDefault();
        let target = e?.target;
        let value = target?.value;
        setformValues(value)
    }
    const handleClickofNext = (e) => {
        e.preventDefault();
        let userDataFull = _fetchUser(formValue).then(resp=> setDataToValidate(resp)).catch(console.log)
        console.log("USERDATA", userDataFull)
    }
    return (
        <div className="initial-screen-container">
            <header className="initial-screen-header">
                <div className="initial-screen-header-defined">
                   <p> Fancy meeting you here!! </p>
                   <label> Tell me who you are from the dropdown below.<br/>
                   and then hit next.</label><br/>
                   <select name="nameSelection" id="nameSelection" placeholder={"Select..."} value={formValue} onSelect={(e)=>handleChange(e)}  onChange={(e)=>handleChange(e)}>{Array.isArray(names) ? names.map((name, index)=>{
                    return <option key={`nameSelection-${name?.name}-${index}`} name="nameSelection" value={name.goesBy}>{name?.goesBy}</option>
                   }) : <option key={"select"} name="nameSelection" value="select">Select...</option> }</select>
                </div>
            </header>
            <div className="initial-screen-body">
                <button className="step-button" onClick={(e)=>handleClickofNext(e)}>Next {">"}</button><br/>
                {JSON.stringify(dataToValidate)}
            </div>
        </div>
    )
}

export default LoginContainer;