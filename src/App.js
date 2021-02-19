import React, { Component } from "react";
//import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ChartWrapper from "./ChartWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand href="#home">Barchart</Navbar.Brand>
        </Navbar>
        <Container>
          <ChartWrapper />
        </Container>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <ChartWrapper />
//     </div>
//   );
// }

export default App;
