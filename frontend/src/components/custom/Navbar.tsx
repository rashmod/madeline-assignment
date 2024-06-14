import CustomNavLink from './CustomNavLink';

export default function Navbar() {
	return (
		<nav className='sticky top-0 z-50 p-4 mb-6 text-white bg-gray-100'>
			<div className='flex justify-between max-w-5xl mx-auto'>
				<div className='text-[#ff3131] font-bold text-xl'>
					Madeline Advisory
				</div>
				<ul className='flex gap-4 font-normal text-black'>
					<li>
						<CustomNavLink to='/' title='Home' />
					</li>
					<li>
						<CustomNavLink to='/geo-tagging' title='GeoTagging' />
					</li>
					<li>
						<CustomNavLink to='/scan' title='Document Scan' />
					</li>
					<li>
						<CustomNavLink to='/hr' title='Human Resource' />
					</li>
					<li>
						<CustomNavLink to='/login' title='Login' />
					</li>
				</ul>
			</div>
		</nav>
	);
}
