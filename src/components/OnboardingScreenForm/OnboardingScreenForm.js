import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import * as R from "ramda";
import { useFormik } from "formik";
import { Box, Flex, Label, Text, Textarea } from "theme-ui";
import Checkbox from "../Checkbox";
import { updateFormValues } from "../../redux/actions";
import { colorSchemes } from "../../constants/color-schemes";

const OnboardingScreenForm = ({ screenKey, options }) => {
	const formValues = useSelector((state) => state.formValues);
	const colorScheme = colorSchemes[screenKey];
	const detailFieldName = `${screenKey}_DETAIL`;
	const acceptsOther = R.compose(R.lt(0), R.indexOf("OTHER"), R.keys)(options);
	const [initialValue] = useState(formValues[screenKey]);

	const dispatch = useDispatch();

	const { values, handleBlur, handleChange } = useFormik({
		validateOnMount: true,
		initialValues: {
			[screenKey]: initialValue || [],
			...(acceptsOther ? { [detailFieldName]: "" } : {}),
		},
	});

	useEffect(() => {
		dispatch(updateFormValues(values));
	}, [dispatch, values]);

	const checkboxes = R.toPairs(options);

	return (
		<Box as="form" onSubmit={(e) => e.preventDefault()}>
			<Flex mb={3} sx={{ flexDirection: "column" }}>
				{checkboxes.map(([key, label]) => (
					<Label key={key} mb={1}>
						{key === "OTHER" ? (
							<Checkbox
								name={screenKey}
								value={key}
								checked={values[screenKey].indexOf(key) > -1}
								onBlur={handleBlur}
								onChange={handleChange}
								scheme={colorScheme}
							>
								{values[screenKey].indexOf("OTHER") > -1 ? (
									<Textarea
										name={detailFieldName}
										autoFocus
										placeholder="Please give more detail"
										onChange={handleChange}
										onBlur={handleBlur}
										rows="6"
										mb={3}
										sx={{ color: "secondary" }}
									/>
								) : (
									<Text color="inherit">Other</Text>
								)}
							</Checkbox>
						) : (
							<Checkbox
								name={screenKey}
								value={key}
								checked={values[screenKey].indexOf(key) > -1}
								onBlur={handleBlur}
								onChange={handleChange}
								scheme={colorScheme}
							>
								<Text color="inherit">{label}</Text>
							</Checkbox>
						)}
					</Label>
				))}
			</Flex>
		</Box>
	);
};

OnboardingScreenForm.propTypes = {
	screenKey: PropTypes.string.isRequired,
	options: PropTypes.shape().isRequired,
};

export default OnboardingScreenForm;
