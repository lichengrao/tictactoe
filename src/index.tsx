import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';
import reportWebVitals from 'reportWebVitals';
import Layout from 'layout';
import { GlobalStyles, theme } from 'styles';
import { CurrentUserProvider } from 'hooks';

ReactDOM.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<CurrentUserProvider>
					<Layout>
						<Routes />
					</Layout>
				</CurrentUserProvider>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
