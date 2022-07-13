import React from "react";

export default function HelloComponent(props) {
  return (
	<div>
		{props.img && <img src={props.img} alt="" />}
	</div>
	);
}
