import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/custom/PasswordInput';
import { useNavigate } from 'react-router-dom';

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Login() {
	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const navigate = useNavigate();

	function onSubmit(data: LoginSchema) {
		console.log(data);
		navigate('/geo-tagging');
	}
	return (
		<section>
			<h2 className='mb-4 text-3xl font-bold text-center'>Login</h2>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col w-1/3 gap-4 mx-auto'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder='example@example.com'
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Use your company email
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<PasswordInput
										placeholder='••••••••'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</section>
	);
}
