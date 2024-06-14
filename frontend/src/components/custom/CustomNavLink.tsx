import { NavLink } from 'react-router-dom';

export default function CustomNavLink({
	to,
	title,
}: {
	to: string;
	title: string;
}) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				[
					'hover:underline underline-offset-4 decoration-2',
					isActive
						? 'underline font-medium decoration-[#ff3131] text-[#ff3131]'
						: '',
				].join(' ')
			}>
			{title}
		</NavLink>
	);
}
