import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

const App = (props: any): JSX.Element => {
  const { state } = React.useContext(Store);

  return (
    <>
      <header>
        <div>
          <h1>Rick and Morty</h1>
          <div>Pick your favorite episode!!!</div>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favorite(s): {state.favorites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
};

export default App;
