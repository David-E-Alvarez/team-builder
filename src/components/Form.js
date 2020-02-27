import React, {useState} from "react";


const Form = props => {
    console.log("props in Form.js", props)
    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: ""
      });
      console.log("teamMember: ", teamMember);
      const handleNameChange = e => {//name change handler
        setTeamMember({ 
            ...teamMember, name: e.target.value
        });
       
        console.log("e.target.value in handleNameChange: ", e.target.value);
      };
      const handleEmailChange = e => {//email change handler
          setTeamMember({
            ...teamMember, email: e.target.value
          });
          console.log("e.target.value in handleEmailChange: ", e.target.value);
      }
      const handleRoleChange = e => {//email change handler
        setTeamMember({
            ...teamMember, role: e.target.value
        });
        console.log("e.target.value in handleRoleChange: ", e.target.value);
    }
    const submitForm = e => {
        e.preventDefault();
        props.addNewTeamMember(teamMember);
        setTeamMember({ name: "", email: "",role: "" });
      };
    return (
        <div className="form-div">
            <form onSubmit={submitForm}>
                <label htmlFor="name">Team Member: </label>
                <input id="name" type="text" name="name" onChange={handleNameChange} /><br/>
                <label htmlFor="email">Email: </label>
                <input id="email" type="text" name="email" onChange={handleEmailChange} /><br/>
                <label htmlFor="role">Role: </label>
                <input id="role" type="text" name="role" onChange={handleRoleChange} /><br/>
                <button type="submit">Add Member</button>
            </form>
        </div>
    );
};

export default Form;


