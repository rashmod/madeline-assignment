const data: Chat[] = [
	{ text: 'Hello! How can I assist you today?', sender: 'Chatbot' },
	{ text: "Hi there! I'm having an issue with my account.", sender: 'You' },
	{
		text: 'Okay, no problem. Can you please provide me with your account number?',
		sender: 'Chatbot',
	},
	{ text: "Sure, it's 123456789.", sender: 'You' },
];

export type Chat = {
	text: string;
	sender: 'You' | 'Chatbot';
};

export default data;
