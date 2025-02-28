import React, { useState } from "react";

export default function XDisplayName(){

    const [name, setName] = useState({firstName: '', lastName: ''});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit =(e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:<input name="firstNameInput" value={name.firstName} onChange={e=> setName({ ...name, firstName:e.target.value})}/>
                </label>
                <br />
                <label>
                    Last Name:<input name="secondNameInput" value={name.lastName} onChange={e=> setName({ ...name, lastName:e.target.value})}/>
                </label>
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
            {
                submitted && (
                    <div>
                        <p>Full Name: {`${name.firstName} ${name.lastName}`}</p>
                    </div>
                )
            }
        </div>
    );
}