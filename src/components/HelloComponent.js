import React from "react";
import propTypes from "prop-types"
export default function HelloComponent(props) {
  return (
	<div>
		{props.img && <img src={props.img} alt="" />}
		<h1>Count : {props.count} </h1>
	</div>
	);
}

HelloComponent.propTypes = {
	count: propTypes.number
}