import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { Player } from './pages/Player';
import './styles/global.css';

export function App() {
	return (
		<ReduxProvider store={store}>
			<div className="bg-red-600">
				<Player />
			</div>
		</ReduxProvider>
	);
}
