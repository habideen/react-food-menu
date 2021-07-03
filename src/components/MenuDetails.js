import React, {Component} from 'react';
import {Card, CardTitle, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import Comments from './CommentComponent';


class dishDetail extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.dish != null) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <Card className="col-12 col-sm-4 col-md-5 col-lg-4">
                            <CardImg src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </Card>
                        <Card className="col-12 col-sm-4 col-md-5 col-lg-4">
                        <Comments comments={this.props.comments} />
                        </Card>
                    </div>
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