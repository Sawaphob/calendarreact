import React from "react";

//import Calendar from "./Calendar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              <b>CULI</b> reservation system
            </span>
          </div>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
      
    );
  }
}

export default App;