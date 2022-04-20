import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Favourites from './components/Favourites';

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='favourites' element={<Favourites />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;