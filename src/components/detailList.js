import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import '../App.css'
export default class eachProduct extends Component {
  state = {
    data: "",
    count: 0
  };
  componentDidMount = () => {
    console.log("each ", this.props.match.params.id);
    axios
      .get(
        `https://cc-mock-api.herokuapp.com/product/${
          this.props.match.params.id
        }`
      )
      .then(res => {
        const { data } = res;
        this.setState({ data: data });
      });
  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  handleaddClick = () => {
    this.setState({
      count: 0
    });
    alert("Complete!!")
  };
  handleClickMinus = () => {
    if(this.state.count <= 0){
      this.setState({
        count: 0
      });
    }else{
    this.setState({
      count: this.state.count - 1
    });
  }
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <Link to="/">Home</Link> | {data.name}
        <hr/>
        <Container>
          <Row>
            <Col sm={4}>
              <br />
              <img
                className="img-fluid"
                alt="complex"
                src={data.image_url}
                width="400px"
                height="500px"
              />
            </Col>
            <Col sm={8}>
              <br />
              <h1>{data.name}</h1>
              <br />
              <p>{data.description}</p>
              <br />
              <h5 className="pcolor">฿{data.price}</h5>
              <ButtonToolbar>
                <Button variant="outline-info" onClick={this.handleClick}>
                  +
                </Button>
                <Button variant="outline-info" disabled>
                  {this.state.count}
                </Button>
                <Button variant="outline-info" onClick={this.handleClickMinus}>
                  -
                </Button>
              </ButtonToolbar>
              <br />
              <Button variant="outline-info" onClick={this.handleaddClick}>Add to Cart</Button>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
