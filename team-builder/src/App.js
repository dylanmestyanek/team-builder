import React, { useState } from 'react';
import './App.css';

import Form from "./components/Form";

function App() {
  const [teamList, setTeamList] = useState([]);

  return (
    <div className="App">
      Users:
      {
        teamList.map(member => 
          <div>
            <p>Name: {member.name}</p>
            <p>E-Mail: {member.email}</p>
            <p>Role: {member.role} </p>
          </div>)
      }
      <Form setTeamList={setTeamList} teamList={teamList} />
    </div>
  );
}

export default App;
