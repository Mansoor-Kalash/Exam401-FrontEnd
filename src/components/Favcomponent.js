import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class Favcomponent extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.imageUrl} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
   
    <Button onClick={()=>this.props.deleteChoco(this.props._id,this.props.email)} type="click" variant="primary">Add To Favorite</Button>
    <Button onClick={()=>this.props.showFormMethod(this.props.email,this.props._id)} type="click" variant="primary">Add To Favorite</Button>

  </Card.Body>
</Card> 

            </div>
        );
    }
}

export default Favcomponent;