import React from 'react'

import "./Cat.css";

export default function Cat(props) {
	const { info } = props;
	return (
		<div className="cat">
			<img src={`/images/${info.image}`} alt={info.name} />
			<div className="info">
				<h3 className="name">{info.name}</h3>
				<p><b>Cuteness level:</b> {info.cutenessLevel}</p>
				<p><b>Lives left:</b> {info.livesLeft}</p>
			</div>
		</div>
	)
}
