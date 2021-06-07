import { Card, Button } from "react-bootstrap";
import { Component } from "react";
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
        <>
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        className="m-2 bg-dark text-white"
        style={{ border: this.state.selected ? "4px solid black" : "none" }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      {
          this.state.selected && <CommentArea asin={this.props.book.asin} />
      }
   </> );
  }
}

export default SingleBook;

