import { Link, Outlet } from 'react-router-dom';

function App() {
	return (
		<main className='min-h-screen flex flex-col'>
			<h1>Madeline Advisory</h1>
			<section className='flex-1 grid'>
				<Outlet />
			</section>
			<div className='flex gap-4'>
				<Link to='/'>Home</Link>
				<Link to='/login'>Login</Link>
				<Link to='/geotagging'>GeoTagging</Link>
				<Link to='/scan'>Document Scan</Link>
			</div>
		</main>
	);
}

export default App;
