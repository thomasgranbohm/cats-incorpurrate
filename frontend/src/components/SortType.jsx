import React from 'react'

import "./SortType.css";

export default function SortType({ value, onChange, selected }) {
	return (
		<>
			<button className={`sorttype ${selected ? "selected" : ""}`} onClick={() => onChange(value)}>{value}</button>
		</>
	)
}
