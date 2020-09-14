import React from 'react'
import Selector from './Selector'

import "./SelectorContainer.css"

export default function SelectorContainer({ array, onChange, selected, title }) {
	return (
		<div className="selectorContainer">
			<h2>{title}:</h2>
			<div className="selectors">{
				array
					.map(s => <Selector
						value={s.value}
						onChange={() => onChange(s.value)}
						selected={s === selected}
						key={s.value} />
					)
			}</div>
		</div>
	)
}
