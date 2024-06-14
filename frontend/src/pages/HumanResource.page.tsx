import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import data, { Employee } from '@/data/humanResource';

export default function HumanResource() {
	return (
		<div>
			<h2 className='text-center text-3xl font-bold mb-4'>
				Employee Data
			</h2>

			<Table className='w-11/12 mx-auto'>
				<TableCaption>Employee Data for Last Month</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className='font-bold'>Name</TableHead>
						<TableHead className='font-bold'>Designation</TableHead>
						<TableHead className='font-bold'>
							Last Login Date
						</TableHead>
						<TableHead className='font-bold'>
							Last Login Time
						</TableHead>
						<TableHead className='font-bold'>
							Last Logout Date
						</TableHead>
						<TableHead className='font-bold'>
							Last Logout Time
						</TableHead>
						<TableHead className='font-bold w-10'>
							Days Present
						</TableHead>
						<TableHead className='font-bold w-10'>
							Days Absent
						</TableHead>
						<TableHead className='font-bold w-10'>
							Days Late
						</TableHead>
						<TableHead className='font-bold w-10'>
							Days Leave
						</TableHead>
						<TableHead className='font-bold text-right'>
							Salary
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{Array(5)
						.fill(data)
						.flat()
						.map((item: Employee, index: number) => (
							<TableRow key={index}>
								<TableCell className='font-semibold'>
									{item.name}
								</TableCell>
								<TableCell>{item.designation}</TableCell>
								<TableCell>{item.lastLoginDate}</TableCell>
								<TableCell>{item.lastLoginTime}</TableCell>
								<TableCell>{item.lastLogoutDate}</TableCell>
								<TableCell>{item.lastLogoutTime}</TableCell>
								<TableCell>{item.daysPresent}</TableCell>
								<TableCell>{item.daysAbsent}</TableCell>
								<TableCell>{item.daysLate}</TableCell>
								<TableCell>{item.daysLeave}</TableCell>
								<TableCell className='text-right font-medium'>
									Rs. {item.salary}
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</div>
	);
}
