import React, { useState } from 'react';
import './App.css';
import styled from "styled-components";

import Form from "./components/Form";

const UserCard = styled.div`
   background: pink;
   
`;


function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});

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
      <Form setTeamList={setTeamList} teamList={teamList} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;
