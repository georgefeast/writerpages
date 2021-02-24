import { UPDATE_FORM_VALUES } from "./actionTypes";

export const updateFormValues = (values) => ({
	type: UPDATE_FORM_VALUES,
	payload: {
		values,
	},
});
