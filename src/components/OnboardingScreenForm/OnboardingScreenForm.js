import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as R from "ramda";
import { useFormik } from "formik";
import { Box, Flex, Label, Text, Textarea } from "theme-ui";
import Checkbox from "../Checkbox";
import { useOnboarding } from "../../pages/Onboarding/useOnboardingContext";

const OnboardingScreenForm = ({ screenKey, options }) => {
	const { formValues, onValues, currentColorScheme } = useOnboarding();

	const detailFieldName = `${screenKey}_DETAIL`;
	const acceptsOther = R.compose(R.indexOf("OTHER"), R.keys)(options);

	const [initialValue] = useState(formValues[screenKey]);

	const { values, handleBlur, handleChange } = useFormik({
		validateOnMount: true,
		initialValues: {
			[screenKey]: initialValue || [],
			...(acceptsOther ? { [detailFieldName]: "" } : {}),
		},
	});

	useEffect(() => {
		onValues(values);
	}, [onValues, values]);

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
								scheme={currentColorScheme}
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
								scheme={currentColorScheme}
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
