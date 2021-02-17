import React, { useEffect, useState } from "react";
import * as R from "ramda";
import { useFormik } from "formik";
import { Box, Button, Flex, Label, Text, Textarea } from "theme-ui";
import Screen from "../../../components/Screen";
import { useOnboarding } from "../useOnboardingContext";
import Checkbox from "../../../components/Checkbox";

const ROLE_OPTIONS = {
	CONTRACTS_MANAGER: "Contracts manager",
	IN_HOUSE_COUNSEL: "In-house counsel",
	IT_ADMINISTRATOR: "IT administrator",
	LAW_CLERK: "Law clerk",
	LEGAL_ADMINISTRATOR: "Legal administrator",
	LEGAL_OPERATIONS_MANAGER: "Legal operations manager",
	LEGAL_SECRETARY: "Legal secretary",
	PARALEGAL: "Paralegal",
	PROCUREMENT_MANAGER: "Procurement manager",
	SOLICITOR: "Solicitor",
};

const FIELD_NAME = "role";
const DETAIL_FIELD_NAME = `${FIELD_NAME}Detail`;

const RoleScreen = () => {
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

	const checkboxes = R.toPairs(ROLE_OPTIONS);

	return (
		<Screen>
			<Text>What is your role?</Text>
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
						>
							{values[FIELD_NAME].indexOf("OTHER") > -1 ? (
								<Textarea
									name={DETAIL_FIELD_NAME}
									autoFocus
									placeholder="Please give more detail about your role"
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
				<Button variant="mediumGhost" onClick={goToPreviousScreen}>
					Back
				</Button>
				<Button variant="mediumGhost" onClick={goToNextScreen}>
					Next
				</Button>
			</Flex>
		</Screen>
	);
};

export default RoleScreen;
