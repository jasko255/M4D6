import SingleBook from "./SingleBook";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Component } from "react";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control 
                    type="text" 
                    placeholder="Search here"
                    value={this.state.search} 
                    onChange={e => this.setState({search: e.target.value})}/>              
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {
          this.props.books.filter(b=> b.title.toLowerCase().includes(this.state.search)).map((b) => (
            <Col xs={3}>
              <SingleBook book={b} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
