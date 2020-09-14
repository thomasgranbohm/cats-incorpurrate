import React from 'react'

import "./Cat.css";

export default function Cat(props) {
	const { info } = props;
	// TODO no info
	return (
		<div className="cat">
			<img src={`/images/${info.image}`} alt={`${info.name}`} />
			<h3 className="name">{info.name}</h3>
		</div>
	)
}
