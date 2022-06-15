import { GlobalStyles } from "../styles/main";
import store, { persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';


export default function MyApp({ Component, pageProps }: any) {

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<GlobalStyles />
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	)
};