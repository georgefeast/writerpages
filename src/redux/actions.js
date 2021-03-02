import {
	UPDATE_FORM_VALUES,
	INCREMENT_CURRENT_SCREEN,
	DECREMENT_CURRENT_SCREEN,
} from "./actionTypes";

export const updateFormValues = (values) => ({
	type: UPDATE_FORM_VALUES,
	payload: {
		values,
	},
});

export const incrementCurrentScreen = () => ({
	type: INCREMENT_CURRENT_SCREEN,
	payload: {},
});

export const decrementCurrentScreen = () => ({
	type: DECREMENT_CURRENT_SCREEN,
	payload: {},
});
