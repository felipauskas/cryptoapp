export const changeTheme = (theme) => (dispatch) => {
	dispatch({
		type: "CHANGE_THEME",
		payload: theme,
	});
};
