import React, {Component} from 'react';
import {Card, CardTitle, CardImg, CardImgOverlay, CardText, CardBody} from 'reactstrap';


class dishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card className="">
                <CardImg src={this.props.dish.image} alt={this.props.dish.name} />
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
            </Card>
        );
    }
}


export default dishDetail;