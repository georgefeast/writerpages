import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as R from "ramda";
import { useFormik } from "formik";
import { Box, Flex, Label, Text, Textarea } from "theme-ui";
import Checkbox from "../Checkbox";
import { useOnboarding } from "../../pages/Onboarding/useOnboardingContext";

const QuestionaireScreenForm = ({ screenKey, options, colorScheme }) => {
	const { formValues, onValues } = useOnboarding();

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
				{checkboxes.map(([key, label]) =>
					key === "OTHER" ? (
						<Label key={key}>
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
									/>
								) : (
									<Text color="inherit">Other</Text>
								)}
							</Checkbox>
						</Label>
					) : (
						<Label key={key}>
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
						</Label>
					),
				)}
			</Flex>
		</Box>
	);
};

QuestionaireScreenForm.defaultProps = {
	colorScheme: "schemeA",
};

QuestionaireScreenForm.propTypes = {
	screenKey: PropTypes.string.isRequired,
	options: PropTypes.shape().isRequired,
	colorScheme: PropTypes.string,
};

export default QuestionaireScreenForm;
