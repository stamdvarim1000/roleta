import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import FormInput from './Components/FormInput';
import RandomNumbers from './Components/RandomNumbers';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  const [numPlayers, setNumPlayers] = useState(2);
  const [sumBalls, setSumBalls] = useState(3);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Card />
          </Route>
          <Route path='/FormInput'>
            <FormInput
              players={numPlayers}
              sumBalls={sumBalls}
              setPlayers={(n) => setNumPlayers(n)}
              setBalls={(n) => setSumBalls(n)}
            />
          </Route>
          <Route path='/RandomNumber'>
            <RandomNumbers players={numPlayers} sumBalls={sumBalls} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
