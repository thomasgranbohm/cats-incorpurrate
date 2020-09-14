import React, { Component } from 'react'
import "./Gallery.css";

import Cat from "./Cat";
import Axios from 'axios';

import { FilterTypes, SortTypes } from '../types';
import SelectorContainer from './SelectorContainer';

export default class Gallery extends Component {
	constructor() {
		super();

		this.onSortTypeChange = this.onSortTypeChange.bind(this);
		this.onFilterTypeChange = this.onFilterTypeChange.bind(this);

		this.state = {
			cats: undefined,
			sortTypes: SortTypes,
			selectedST: SortTypes[0],
			filterTypes: FilterTypes,
			selectedFT: undefined
		}
	}

	async componentDidMount() {
		let cats = []
		try {
			let resp = await Axios.get("http://localhost:1337/data.json");
			cats = resp.data.cats;
		} catch (err) {
			console.error(err)
		}
		this.setState({ cats });
	}

	onSortTypeChange(sortValue) {
		let sortType = this.state.sortTypes
			.find((sortType) => sortType.value === sortValue);
		this.setState({ selectedST: sortType })
	}

	onFilterTypeChange(filterValue) {
		let filterType = this.state.filterTypes
			.find((filterType) => filterType.value === filterValue);
		if (filterType === this.state.selectedFT) filterType = undefined;
		this.setState({ selectedFT: filterType });
	}

	render() {
		if (!this.state.cats) {
			return (
				<div className="loading">
					<h2>Loading...</h2>
				</div>
			)
		}

		let cats = this.state.cats.slice();

		if (cats.length === 0) {
			return (
				<div className="error">
					<h2>No cats found :(</h2>
				</div>
			)
		}

		const { selectedST, selectedFT } = this.state;
		if (selectedST) cats = cats.sort(selectedST.f);
		if (selectedFT) cats = cats.filter(selectedFT.f);

		return (
			<div className="gallery">
				<div className="selectorContainers">
					<SelectorContainer
						title={"Filters"}
						array={this.state.filterTypes}
						selected={selectedFT}
						onChange={this.onFilterTypeChange} />
					<SelectorContainer
						title={"Sorting"}
						array={this.state.sortTypes}
						selected={selectedST}
						onChange={this.onSortTypeChange} />
				</div>
				<div className="cats">
					{cats.map((info, i) => <Cat key={`Cat-#${i}`} info={info} />)}
				</div>
			</div>
		)
	}
}