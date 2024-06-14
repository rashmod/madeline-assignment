import { Button } from '@/components/ui/button';
import { useState } from 'react';

type Location = {
	latitude: number | null;
	longitude: number | null;
};

export default function GeoTagging() {
	const [location, setLocation] = useState<Location>({
		latitude: null,
		longitude: null,
	});
	const [error, setError] = useState<string | null>(null);

	function handlerLocationClick() {
		console.log('handlerLocationClick');
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				successHandler,
				errorHandler
			);
		} else {
			alert('Geolocation is not supported by this browser.');
		}
	}

	function successHandler(position: GeolocationPosition) {
		console.log(position);
		const { latitude, longitude } = position.coords;
		setLocation({ latitude, longitude });
		setError(null);
	}

	function errorHandler(error: GeolocationPositionError) {
		console.log(error);
		setError(
			'Location access was denied. Please enable it in your browser settings and try again.'
		);
	}

	return (
		<section className=''>
			<h2 className='text-center text-3xl font-bold mb-4'>GeoTagging</h2>
			<Button
				className='mx-auto block mt-40'
				onClick={handlerLocationClick}>
				Get my current location
			</Button>
			<div className='w-1/2 mx-auto mt-10'>
				{error ? (
					<p className='text-red-500 font-medium text-xl'>
						Error: {error}
					</p>
				) : (
					location.latitude && (
						<div className='flex flex-col gap-2 items-center'>
							<p>
								Latitude:{' '}
								<span className='font-bold'>
									{location.latitude}
								</span>
							</p>
							<p>
								Longitude:{' '}
								<span className='font-bold'>
									{location.longitude}
								</span>
							</p>
						</div>
					)
				)}
				{error && (
					<div>
						<p>
							If you previously denied access to location, please
							follow these steps to enable it:
						</p>
						<ul className='list-disc list-inside'>
							<li>
								<strong>Chrome:</strong> Go to Settings &gt;
								Privacy and security &gt; Site settings &gt;
								Location.
							</li>
							<li>
								<strong>Firefox:</strong> Go to Preferences &gt;
								Privacy & Security &gt; Permissions &gt;
								Location.
							</li>
							<li>
								<strong>Safari:</strong> Go to Preferences &gt;
								Websites &gt; Location.
							</li>
						</ul>
					</div>
				)}
			</div>
		</section>
	);
}
