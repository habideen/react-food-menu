import React from 'react';
import { Card, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem({dish, onClick}) {
	return(
		<Link to={`/menu/${dish.id}`}>
			<CardImg width="100%" src={dish.image} alt={dish.name} />
			<CardImgOverlay>
				<CardTitle>{dish.name}</CardTitle>
			</CardImgOverlay>
		</Link>
	);
}

const Menu = (props) => {
	const menu = props.dishes.map((dish) => {
		return (
			<div key={dish.id} className="col-12 col-md-3 m-0">
				<RenderMenuItem dish={dish} />
			</div>
		);
	});

	return (
		
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
					<BreadcrumbItem active>Menu</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>Menu</h3>
					<hr />
				</div>
			</div>
			<div className="row">
				{menu}
			</div>
		</div>
	);
}
 		


 export default Menu;