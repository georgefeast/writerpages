import React from "react";
import "typeface-roboto";
import { ThemeProvider } from "theme-ui";
import theme from "./assets/styles/theme";
import "./assets/styles/base.css";
import Onboarding from "./pages/Onboarding";

const App = () => (
	<ThemeProvider theme={theme}>
		<Onboarding />
	</ThemeProvider>
);

export default App;
