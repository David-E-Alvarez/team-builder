import React, {useState} from 'react';
import Form from './components/Form';
import TeamMember from './components/TeamMember';
import data from './data';
import './App.css';

function App() {
  const [teamMembers] = useState(data);
  console.log("teamMembers: ", teamMembers);
  return (
    <div className="App">
      <Form/>
      {teamMembers.map(teamMember => {
        return <TeamMember id={teamMember.id} teamMember={teamMember}/>
      })}
    </div>
  );
}

export default App;
