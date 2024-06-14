import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';

export default function DocumentScan() {
	const [error, setError] = useState<string | null>(null);
	const [cameraRequested, setCameraRequested] = useState(false);
	const [photo, setPhoto] = useState<string | null>(null);

	const videoRef = useRef<HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	async function handleCameraAccess() {
		setCameraRequested(true);
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true,
			});
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
			}
			setError(null); // Clear any previous error
		} catch (err) {
			setError(
				'Camera access was denied. Please enable it in your browser settings and try again.'
			);
		}
	}

	function takePhoto() {
		if (!videoRef.current || !canvasRef.current) return;

		const video = videoRef.current;
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		if (!context) return;

		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;

		context.drawImage(video, 0, 0, canvas.width, canvas.height);
		setPhoto(canvas.toDataURL('image/png'));
	}

	return (
		<section className='px-4 flex flex-col gap-8'>
			<h2 className='text-center text-3xl font-bold mb-4'>
				Camera Access
			</h2>
			<Button className='mx-auto block' onClick={handleCameraAccess}>
				Access Camera
			</Button>

			{error && (
				<div className='w-1/2 mx-auto'>
					<p>
						If you previously denied access to the camera, please
						follow these steps to enable it:
					</p>
					<ul className='list-disc list-inside'>
						<li>
							<strong>Chrome:</strong> Go to Settings &gt; Privacy
							and security &gt; Site settings &gt; Camera.
						</li>
						<li>
							<strong>Firefox:</strong> Go to Preferences &gt;
							Privacy &amp; Security &gt; Permissions &gt; Camera.
						</li>
						<li>
							<strong>Safari:</strong> Go to Preferences &gt;
							Websites &gt; Camera.
						</li>
					</ul>
				</div>
			)}

			<div className='flex gap-8'>
				<div className='w-1/2'>
					<h3 className='text-center mb-4'>Camera Preview</h3>
					{cameraRequested && !error ? (
						<video
							ref={videoRef}
							autoPlay
							className='aspect-video'
						/>
					) : (
						<div className='border-2 border-dashed aspect-video flex flex-col items-center justify-center'>
							<p>Allow Camera</p>
							<p className='text-red-500 font-medium w-2/3'>
								{error}
							</p>
						</div>
					)}
				</div>
				<div className='w-1/2 '>
					<h3 className='text-center mb-4'>Scanned Image</h3>
					<canvas ref={canvasRef} className='hidden' />
					<div className='border-2 border-dashed aspect-video grid items-center justify-center'>
						{photo ? <img src={photo} /> : <p>Image Preview</p>}
					</div>
				</div>
			</div>
			<Button onClick={takePhoto} className='w-40 mx-auto'>
				Take Photo
			</Button>
		</section>
	);
}
