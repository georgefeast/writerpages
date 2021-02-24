import React from "react";
import "typeface-roboto";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "theme-ui";
import theme from "./assets/styles/theme";
import "./assets/styles/base.css";
import Onboarding from "./pages/Onboarding";
import store from "./redux/store";

const App = () => (
	<StoreProvider store={store}>
		<ThemeProvider theme={theme}>
			<Onboarding />
		</ThemeProvider>
	</StoreProvider>
);

export default App;
