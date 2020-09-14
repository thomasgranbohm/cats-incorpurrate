import React, { Component } from 'react'
import Sorter from './Sorter';
import "./Gallery.css";

import Cat from "./Cat";
import Axios from 'axios';

export default class Gallery extends Component {
	constructor() {
		super();

		this.onRadioChange = this.onRadioChange.bind(this);

		this.state = {
			cats: undefined,
			sortTypes: [
				{
					value: "None",
					f: (a, b) => 1
				},
				{
					value: "Much cute",
					f: (a, b) => (b.cutenessLevel - a.cutenessLevel)
				},
				{
					value: "Cuten't",
					f: (a, b) => (a.cutenessLevel - b.cutenessLevel)
				},
				{
					value: "Very life",
					f: (a, b) => (b.livesLeft - a.livesLeft)
				},
				{
					value: "No-life",
					f: (a, b) => (a.livesLeft - b.livesLeft)
				}
			],
			selectedSortType: "None"
		}
	}

	async componentDidMount() {
		let cats = []
		try {
			let resp = await Axios.get('/catdata.json');
			cats = resp.data.cats;

			// TODO message if no cast
		} catch (err) {
			console.error(err)
		}
		this.setState({ cats });
	}

	onRadioChange(sortValue) {
		let sortType = this.state.sortTypes.find((sortType) => sortType.value === sortValue);

		this.setState({ selectedSortType: sortType })
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

		const { selectedSortType } = this.state;

		if (selectedSortType) cats = cats.sort(selectedSortType.f);
		return (
			<div className="gallery">
				<Sorter
					sortTypes={this.state.sortTypes}
					selectedSortType={selectedSortType.value}
					onChange={this.onRadioChange} />
				<div className="cats">
					{cats.map((info, i) => <Cat key={`Cat-#${i}`} info={info} />)}
				</div>
			</div>
		)
	}
}