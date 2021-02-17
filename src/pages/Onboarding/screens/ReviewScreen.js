import React, { useEffect, useState } from "react";
import * as R from "ramda";
import { useFormik } from "formik";
import { Box, Heading, Button, Flex, Label, Text, Textarea } from "theme-ui";
import Screen from "../../../components/Screen";
import { useOnboarding } from "../useOnboardingContext";
import Checkbox from "../../../components/Checkbox";
import { colorSchemes } from "../../../constants/color-schemes";
import { REVIEW_OPTIONS } from "../../../constants/options";

const FIELD_NAME = "review";
const DETAIL_FIELD_NAME = `${FIELD_NAME}Detail`;
const COLOR_SCHEME = colorSchemes.REVIEW;

const ReviewScreen = () => {
	const {
		formValues,
		onValues,
		goToPreviousScreen,
		goToNextScreen,
	} = useOnboarding();

	const [initialValue] = useState(formValues[FIELD_NAME]);

	const { values, handleBlur, handleChange } = useFormik({
		validateOnMount: true,
		initialValues: {
			[FIELD_NAME]: initialValue || [],
			[DETAIL_FIELD_NAME]: "",
		},
	});

	useEffect(() => {
		onValues(values);
	}, [onValues, values]);

	const checkboxes = R.toPairs(REVIEW_OPTIONS);

	return (
		<Screen>
			<Box sx={{ py: 3 }}>
				<Heading as="h2" variant="headingSmall">
					What types of review do you do?
				</Heading>
			</Box>
			<Box as="form" onSubmit={(e) => e.preventDefault()}>
				<Flex mb={3} sx={{ flexDirection: "column" }}>
					{checkboxes.map(([key, label]) => (
						<Label key={key}>
							<Checkbox
								name={FIELD_NAME}
								value={key}
								checked={values[FIELD_NAME].indexOf(key) > -1}
								onBlur={handleBlur}
								onChange={handleChange}
								scheme={COLOR_SCHEME}
							>
								<Text color="inherit">{label}</Text>
							</Checkbox>
						</Label>
					))}
					<Label key="OTHER">
						<Checkbox
							name={FIELD_NAME}
							value="OTHER"
							checked={values[FIELD_NAME].indexOf("OTHER") > -1}
							onBlur={handleBlur}
							onChange={handleChange}
							scheme={COLOR_SCHEME}
						>
							{values[FIELD_NAME].indexOf("OTHER") > -1 ? (
								<Textarea
									name={DETAIL_FIELD_NAME}
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
				</Flex>
			</Box>
			<Flex>
				<Button
					variant="mediumGhost"
					sx={{ width: "50%", mr: 3 }}
					onClick={goToPreviousScreen}
				>
					Back
				</Button>
				<Button
					variant="mediumGhost"
					sx={{ width: "50%" }}
					onClick={goToNextScreen}
				>
					Next
				</Button>
			</Flex>
		</Screen>
	);
};

export default ReviewScreen;
