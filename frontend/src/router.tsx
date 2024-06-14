import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './pages/Home.page';
import Login from './pages/Login.page';
import GeoTagging from './pages/GeoTagging.page';
import DocumentScan from './pages/DocumentScan.page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'geotagging',
				element: <GeoTagging />,
			},
			{
				path: 'scan',
				element: <DocumentScan />,
			},
		],
	},
]);

export default router;
