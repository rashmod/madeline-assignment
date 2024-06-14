import { Outlet } from 'react-router-dom';
import Navbar from './components/custom/Navbar';

function App() {
	return (
		<main className='flex flex-col min-h-screen'>
			<Navbar />
			<section className='grid flex-1'>
				<Outlet />
			</section>
		</main>
	);
}

export default App;
