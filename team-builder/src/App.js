import React, { useState } from 'react';
import './App.css';

import Form from "./components/Form";

function App() {
  const [teamList, setTeamList] = useState({});
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
