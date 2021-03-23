import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Letters from "./Components/Letters/Letters";
import Us from "./Components/Us/Us";
import axios from "axios";
import { Route } from "react-router-dom";

import "./App.css";

function App() {
  const [ activities, setActivities] = useState("")
  const [letters, setLetters] = useState("")
  const [us, setUs] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({data}) => {
      setActivities(data.activities);
      setLetters(data.letters);
      setUs(data.us);
    });
  }, []);


  return (
    <div className="App">
        <Header activities={activities}/>
        <div className="content">
          <Route path="/letters" render={() => <Letters items={letters}/>} exact/>
          <Route path="/us" render={() => <Us items={us}/>} exact/>
        </div>
    </div>
  );
}

export default App;
