// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { client } from './g/index'

import { App } from './containers/app/index'
import '../assets/style.css';

export const app = {
	render() {
		const root = document.getElementById('react-container');
		if (root) {
			ReactDOM.render(
				<ApolloProvider client={client}>
                    <App />
				</ApolloProvider>,
				root,
			);
		}
	},
};

app.render();

//$FlowFixMe
if (module.hot) {
    //$FlowFixMe
	module.hot.accept('./containers/app', () => app.render());
}