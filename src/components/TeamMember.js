import React from "react";

const TeamMember = props =>{
     return(
        <div>
            <h1>Name: {props.teamMember.name}</h1>
            <p>Email: {props.teamMember.email}</p>
            <p>Role: {props.teamMember.role}</p>
        </div>
     );
}

export default TeamMember;