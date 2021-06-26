import React, {Component} from 'react';
import {Card, CardTitle, CardImg, CardText, CardBody} from 'reactstrap';


class dishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() { console.log(this.props);
        if (this.props.dish != null) {
            return(
                <div className="row">
                    <Card className="col-12 col-sm-4 col-md-5 col-lg-4">
                        <CardImg src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default dishDetail;