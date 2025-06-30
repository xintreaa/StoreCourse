import { createSlice } from "@reduxjs/toolkit";

const getInitialDarkMode = () => {
	const storedDarkMode = localStorage.getItem('darkMode');
	return storedDarkMode ? JSON.parse(storedDarkMode) : true; // Default to dark mode if not set
}

export const uiSlice = createSlice({
	name: "ui",
	initialState: {
		isLoading: false,
		darkMode: getInitialDarkMode() // Initialize dark mode state
	},
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		stopLoading: (state) => {
			state.isLoading = false;
		},
		setDarkMode: (state) => {
			state.darkMode = !state.darkMode; // Toggle dark mode state
			localStorage.setItem('darkMode', JSON.stringify(!state.darkMode)); // Store the preference in localStorage
		}
	}
});

export const {startLoading, stopLoading, setDarkMode } = uiSlice.actions;