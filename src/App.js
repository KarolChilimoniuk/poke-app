import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Nav} from "./components/Nav/Nav";
import {Home} from "./components/Home/Home";
import {PokemonList} from "./components/PokemonList/PokemonList";
import {PlayerList} from "./components/PlayerList/PlayerList";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/pokemons" component={PokemonList}/>
          <Route path="/players" component={PlayerList}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
