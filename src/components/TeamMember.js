import React from "react";

const TeamMember = ({teamMember}) =>{
    const{name,email,role} = teamMember;
     return(
        <div>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
     );
}

export default TeamMember;