import React from "react";
import PropTypes from "prop-types";
import { Box } from "theme-ui";

const Screen = ({ children }) => <Box>{children}</Box>;

Screen.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Screen;
