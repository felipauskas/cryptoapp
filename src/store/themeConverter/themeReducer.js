const initialState = {
	current: "dark",
	styles: {
		dark: {
			mainBg: "rgba(25, 27, 31, 1)",
			constrastBg: "rgba(31, 33, 40, 1)",
			componentBg: "rgba(44, 47, 54, 1)",
			color: "#fff",
		},
		light: {
			mainBg: "rgba(255, 255, 255, 1)",
			constrastBg: "rgba(252, 252, 252, 1)",
			componentBg: "rgba(252, 252, 252, 1)",
			color: "rgba(44, 47, 54, 1)",
		},
	},
};

export default function themeReducer(state = initialState, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "CHANGE_THEME":
			return {
				...state,
				current: action.payload,
			};
	}
	return state;
}
