import React, { useState } from 'react';
import './App.css';
import styled from "styled-components";

import Form from "./components/Form";

const UserCard = styled.div`
   background: pink;
   
`;


function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(false);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    console.log(newMember.id)
    setTeamList([...teamList, newMember]);
  };

  const editMember = (user) => {
    const editingMember = teamList.map(member => member.id === user.id ? member : null)[0];
    console.log(teamList)
  };

  return (
    <div className="App">
      Users:
      {
        teamList.map(member => 
          <UserCard>
            <p>Name: {member.name}</p>
            <p>E-Mail: {member.email}</p>
            <p>Role: {member.role} </p>
            <button onClick={() => setMemberToEdit(member)}>Edit</button>
          </UserCard>)
      }
      <Form addNewMember={addNewMember} memberToEdit={memberToEdit} editMember={editMember}/>
    </div>
  );
}

export default App;
