export const SortTypes = [
	{
		value: "None",
		f: (a, b) => 0
	},
	{
		value: "Much cute",
		f: (a, b) => {
			let r = (b.cutenessLevel - a.cutenessLevel);
			if (r === 0) return a.name.localeCompare(b.name);
			return r;
		}
	},
	{
		value: "Cuten't",
		f: (a, b) => {
			let r = (a.cutenessLevel - b.cutenessLevel);
			if (r === 0) return a.name.localeCompare(b.name);
			return r;
		}
	},
	{
		value: "Very life",
		f: (a, b) => {
			let r = (b.livesLeft - a.livesLeft);
			if (r === 0) return a.name.localeCompare(b.name);
			return r;
		}
	},
	{
		value: "No-life",
		f: (a, b) => {
			let r = (a.livesLeft - b.livesLeft);
			if (r === 0) return a.name.localeCompare(b.name);
			return r;
		}
	}
];

export const FilterTypes = [
	{
		value: "Allergy inducing fur",
		f: (a) => a.allergyInducingFur
	},
	{
		value: "Free fur all",
		f: (a) => !a.allergyInducingFur
	},
];