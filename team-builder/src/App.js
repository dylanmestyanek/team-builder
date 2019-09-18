import React, { useState } from 'react';
import './App.css';
import styled from "styled-components";

import Form from "./components/Form";
import Member from "./components/Member";

function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState('');

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamList([...teamList, newMember]);
  };

  return (
    <div className="App">
      <Form 
        addNewMember={addNewMember}
      />

      Users:
      {
        teamList.map(member => 
          <Member member={member} setMemberToEdit={setMemberToEdit} />
        )
      }
      
    </div>
  );
}

export default App;
