import * as R from "ramda";
import {
	UPDATE_FORM_VALUES,
	INCREMENT_CURRENT_SCREEN,
	DECREMENT_CURRENT_SCREEN,
} from "./actionTypes";

export const rootReducer = (
	state = { formValues: {}, currentScreen: 0 },
	action,
) => {
	switch (action.type) {
		case UPDATE_FORM_VALUES: {
			const { values } = action.payload;
			return {
				...state,
				formValues: R.mergeRight(state.formValues, values),
			};
		}
		case INCREMENT_CURRENT_SCREEN: {
			return {
				...state,
				currentScreen: state.currentScreen + 1,
			};
		}
		case DECREMENT_CURRENT_SCREEN: {
			return {
				...state,
				currentScreen: state.currentScreen - 1,
			};
		}
		default:
			return state;
	}
};
