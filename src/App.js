import React, { Component } from 'react';
import Userpage from './Components/Userpage/Userpage';

class App extends Component {
  render() {
    return (
      <div className="App Page Theme Theme_color_whitepaper-default Theme_space_default Theme_breakpoint_default Theme_size_default Theme_gap_medium Theme_menu_default">
        <Userpage />
      </div>
    );
  }
}

export default App;