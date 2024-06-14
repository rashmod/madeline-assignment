import { useState } from 'react';

import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SendIcon, XIcon } from 'lucide-react';
import data, { Chat } from '@/data/chat';
import ChatText from './ChatText';

export default function Chatbot() {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	if (!open)
		return (
			<Button
				className='fixed w-28 bottom-10 right-10'
				onClick={handleOpen}>
				Chatbot
			</Button>
		);

	return (
		<Card className='fixed bottom-0 right-0 w-full max-w-md mx-auto'>
			<CardHeader className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800'>
				<div className='flex items-center gap-3'>
					<Avatar>
						<AvatarImage
							alt='Chatbot Avatar'
							src='/placeholder-user.jpg'
						/>
						<AvatarFallback>CB</AvatarFallback>
					</Avatar>
					<div>
						<p className='text-sm font-medium'>Chatbot</p>
						<p className='text-xs text-gray-500 dark:text-gray-400'>
							Online
						</p>
					</div>
				</div>
				<Button
					className='rounded-full'
					size='icon'
					variant='ghost'
					onClick={handleClose}>
					<XIcon className='w-4 h-4' />
					<span className='sr-only'>Close</span>
				</Button>
			</CardHeader>
			<CardContent className='flex-1 p-4'>
				<div className='space-y-4 overflow-y-auto h-72'>
					{Array(3)
						.fill(data)
						.flat()
						.map((item: Chat) => (
							<ChatText
								key={item.text}
								text={item.text}
								sender={item.sender}
							/>
						))}
				</div>
			</CardContent>
			<CardFooter className='p-4 border-t border-gray-200 dark:border-gray-800'>
				<form className='flex items-center w-full space-x-2'>
					<Input
						autoComplete='off'
						className='flex-1'
						id='message'
						placeholder='Type your message...'
					/>
					<Button size='icon' type='submit'>
						<SendIcon className='w-4 h-4' />
						<span className='sr-only'>Send</span>
					</Button>
				</form>
			</CardFooter>
		</Card>
	);
}
