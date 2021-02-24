import * as R from "ramda";
import { UPDATE_FORM_VALUES } from "./actionTypes";

export const rootReducer = (state = { formValues: {} }, action) => {
	switch (action.type) {
		case UPDATE_FORM_VALUES: {
			const { values } = action.payload;
			return {
				...state,
				formValues: R.mergeRight(state.formValues, values),
			};
		}
		default:
			return state;
	}
};
