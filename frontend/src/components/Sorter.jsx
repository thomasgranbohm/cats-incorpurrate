import React from 'react'
import SortType from './SortType'

import "./Sorter.css"

export default function Sorter({ sortTypes, onChange, selectedSortType }) {
	console.log(selectedSortType)
	return (
		<div className="sorter">
			<h2>Sorting:</h2>
			<div className="sorttypes">{
				sortTypes
					.map(s => <SortType
						value={s.value}
						onChange={onChange}
						selected={s.value === selectedSortType}
						key={s.value} />
					)
			}</div>
		</div>
	)
}
