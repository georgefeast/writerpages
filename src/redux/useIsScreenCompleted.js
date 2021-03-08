import { useSelector } from "react-redux";

const useIsScreenCompleted = (screenKey) => {
	const formValues = useSelector((state) => state.formValues);

	return Boolean(formValues[screenKey] && formValues[screenKey].length);
};

export default useIsScreenCompleted;
