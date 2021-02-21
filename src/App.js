import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ChartWrapper from "./ChartWrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GenderDropdown from "./GenderDropdown";

class App extends Component {
  state = {
    gender: "men",
  };

  genderSelected = (gender) => this.setState({ gender });

  render() {
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand href="#home">Barchart</Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col xs={12}>
              <GenderDropdown genderSelected={this.genderSelected} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ChartWrapper gender={this.state.gender} />
            </Col>
          </Row>
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
