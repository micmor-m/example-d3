import React, { Component } from "react";
//import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ChartWrapper from "./ChartWrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand href="#home">Barchart</Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
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
