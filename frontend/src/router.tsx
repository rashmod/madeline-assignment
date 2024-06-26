import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './pages/Home.page';
import Login from './pages/Login.page';
import GeoTagging from './pages/GeoTagging.page';
import DocumentScan from './pages/DocumentScan.page';
import HumanResource from './pages/HumanResource.page';

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
				path: 'geo-tagging',
				element: <GeoTagging />,
			},
			{
				path: 'scan',
				element: <DocumentScan />,
			},
			{
				path: 'hr',
				element: <HumanResource />,
			},
		],
	},
]);

export default router;
