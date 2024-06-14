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
				isActive
					? 'underline underline-offset-4 font-medium decoration-2 decoration-[#ff3131] text-[#ff3131]'
					: undefined
			}>
			{title}
		</NavLink>
	);
}
