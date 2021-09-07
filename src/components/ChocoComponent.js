import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ChocoComponent extends Component {
    render() {
        return (
            <div>
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.imageUrl} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
   
    <Button onClick={()=>this.props.addToMyFav(this.props.imageUrl,this.props.title)} type="click" variant="primary">Add To Favorite</Button>
  </Card.Body>
</Card>  
            </div>
        );
    }
}

export default ChocoComponent;