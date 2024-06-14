export default function ChatText({
	text,
	sender,
}: {
	text: string;
	sender: 'You' | 'Chatbot';
}) {
	if (sender === 'Chatbot') {
		return (
			<div className='flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-gray-100'>
				<p>{text}</p>
				<div className='text-xs text-gray-500'>{sender}</div>
			</div>
		);
	}
	return (
		<div className='flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-gray-900 text-gray-50'>
			<p>{text}</p>
			<div className='text-xs text-gray-500'>{sender}</div>
		</div>
	);
}
