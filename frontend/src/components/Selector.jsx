import React from 'react'

import "./Selector.css";

export default function Selector({ value, onChange, selected }) {
	return (
		<>
			<button className={`selector ${selected ? "selected" : ""}`} onClick={onChange}>{value}</button>
		</>
	)
}
