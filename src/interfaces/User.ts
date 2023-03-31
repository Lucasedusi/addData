interface OptionType {
	value: string;
	label: string;
}

export interface User {
	id: number;
	name: string;
	email: string;
	selectedOption: OptionType[];
}
