import React, {useState} from 'react';
import Form from './components/Form';
import TeamMember from './components/TeamMember';
import data from './data';
import './App.css';

function App() {
  const [teamMembers, setTeamMember] = useState(data);
  //console.log("teamMembers: ", teamMembers);
  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: teamMember.id,
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMember([...teamMembers, newTeamMember]);
  };
  return (
    <div className="App">
      <Form addNewTeamMember={addNewTeamMember}/>
      {teamMembers.map(teamMember => {
        return <TeamMember key={teamMember.id} teamMember={teamMember}/>
      })}
    </div>
  );
}

export default App;
