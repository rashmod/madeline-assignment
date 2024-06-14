import { Link, Outlet } from 'react-router-dom';
import Navbar from './components/custom/Navbar';

function App() {
	return (
		<main className='min-h-screen flex flex-col'>
			<Navbar />
			<section className='flex-1 grid'>
				<Outlet />
			</section>
			<div className='flex gap-4'>
				<Link to='/'>Home</Link>
				<Link to='/login'>Login</Link>
				<Link to='/geotagging'>GeoTagging</Link>
				<Link to='/scan'>Document Scan</Link>
				<Link to='/hr'>Human Resource</Link>
			</div>
		</main>
	);
}

export default App;
