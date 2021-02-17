import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as R from "ramda";
import { useFormik } from "formik";
import { Box, Flex, Label, Text, Textarea } from "theme-ui";
import { useOnboarding } from "../useOnboardingContext";
import Checkbox from "../../../components/Checkbox";

const QuestionaireForm = ({
	fieldName,
	options,
	acceptsOther,
	colorScheme,
}) => {
	const { formValues, onValues } = useOnboarding();

	const detailFieldName = `${fieldName}Detail`;

	const [initialValue] = useState(formValues[fieldName]);

	const { values, handleBlur, handleChange } = useFormik({
		validateOnMount: true,
		initialValues: {
			[fieldName]: initialValue || [],
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
					<Label key={key}>
						<Checkbox
							name={fieldName}
							value={key}
							checked={values[fieldName].indexOf(key) > -1}
							onBlur={handleBlur}
							onChange={handleChange}
							scheme={colorScheme}
						>
							<Text color="inherit">{label}</Text>
						</Checkbox>
					</Label>
				))}
				{acceptsOther ? (
					<Label key="OTHER">
						<Checkbox
							name={fieldName}
							value="OTHER"
							checked={values[fieldName].indexOf("OTHER") > -1}
							onBlur={handleBlur}
							onChange={handleChange}
							scheme={colorScheme}
						>
							{values[fieldName].indexOf("OTHER") > -1 ? (
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
				) : null}
			</Flex>
		</Box>
	);
};

QuestionaireForm.defaultProps = {
	acceptsOther: true,
	colorScheme: "schemeA",
};

QuestionaireForm.propTypes = {
	fieldName: PropTypes.string.isRequired,
	options: PropTypes.shape().isRequired,
	acceptsOther: PropTypes.bool,
	colorScheme: PropTypes.string,
};

export default QuestionaireForm;
