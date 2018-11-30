import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Student from "./components/Student";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: []
    };
  }
  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>One-Way Data Binding</h1>
        </header>

        <Student
          age={4}
          name="Taneesha"
          from="Houston, TX"
          stickers={["Muy bien", "Especial"]}
          marker={{
            color: "Black",
            brand: "Expo"
          }}
          money={this.state.money}
          spendMoney={() => console.log("spent money")}
        />
        <p>
          {this.state.money[0]
            ? this.state.money[0].denomination
            : "No money :("}
        </p>
        <button
          onClick={() => {
            const newMoney = [
              ...this.state.money,
              { denomination: 5, currency: "Chinese Yuan" }
            ];
            this.setState({ money: newMoney });
          }}
        >
          Give me money
        </button>
      </div>
    );
  }
}

export default App;
