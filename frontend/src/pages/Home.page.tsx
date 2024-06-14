import { Link } from 'react-router-dom';

import Chatbot from '@/components/custom/Chatbot';
import { BriefcaseIcon, ClipboardIcon, ShieldIcon } from 'lucide-react';

export default function Home() {
	return (
		<section className='relative max-w-5xl mx-auto'>
			<main className='flex-1'>
				<section className='w-full py-16'>
					<div className='container px-4'>
						<div className='grid gap-6 grid-cols-[1fr_400px]'>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
										Comprehensive Financial Solutions
									</h1>
									<p className='max-w-[600px] text-gray-500 text-xl'>
										Comprehensive auditing services to
										ensure your business operates with the
										highest standards of compliance and
										financial integrity.
									</p>
								</div>
								<div className='flex flex-col gap-2 min-[400px]:flex-row'>
									<Link
										className='inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50'
										to='#'>
										Get a Quote
									</Link>
								</div>
							</div>
							<img
								alt='Hero'
								className='object-cover mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:aspect-square'
								height='550'
								src='/placeholder.svg'
								width='550'
							/>
						</div>
					</div>
				</section>

				<section className='w-full py-16 bg-gray-100'>
					<div className='container px-4'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-5xl font-bold tracking-tighter'>
									Our Services
								</h2>
								<p className='max-w-[900px] text-gray-500'>
									Madeline Advisory Auditing provides a
									comprehensive suite of auditing services to
									ensure your business operates with the
									highest standards of compliance and
									financial integrity.
								</p>
							</div>
						</div>
						<div className='grid items-start max-w-5xl grid-cols-3 gap-6 py-12 mx-auto'>
							<div className='grid gap-1'>
								<BriefcaseIcon className='w-8 h-8 text-gray-900' />
								<h3 className='text-xl font-bold'>
									Financial Audits
								</h3>
								<p className='text-gray-500'>
									Comprehensive audits of your financial
									records to ensure accuracy and compliance.
								</p>
							</div>
							<div className='grid gap-1'>
								<ShieldIcon className='w-8 h-8 text-gray-900' />
								<h3 className='text-xl font-bold'>
									Compliance Audits
								</h3>
								<p className='text-gray-500'>
									Ensure your business operations adhere to
									all relevant regulations and industry
									standards.
								</p>
							</div>
							<div className='grid gap-1'>
								<ClipboardIcon className='w-8 h-8 text-gray-900' />
								<h3 className='text-xl font-bold'>
									Internal Audits
								</h3>
								<p className='text-gray-500'>
									Identify and address internal control
									weaknesses to improve operational
									efficiency.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full py-16'>
					<div className='container px-4'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									Our Mission, Vision, and Goal
								</h2>

								<div className='grid items-start max-w-5xl grid-cols-3 gap-6 py-12 mx-auto'>
									<div className='grid gap-1'>
										<h3 className='text-xl font-bold'>
											Mission
										</h3>
										<p className='text-left text-gray-500'>
											Simplifying financial management
											with reliable bookkeeping and
											auditing, so you can focus on
											growing your business.
										</p>
									</div>
									<div className='grid gap-1'>
										<h3 className='text-xl font-bold'>
											Vision
										</h3>
										<p className='text-left text-gray-500'>
											Empowering businesses with accurate
											consultancy and strategic financial
											guidance.
										</p>
									</div>
									<div className='grid gap-1'>
										<h3 className='text-xl font-bold'>
											Goal
										</h3>
										<p className='text-left text-gray-500'>
											Championing financial clarity,
											helping business owners feel
											confident and in control of their
											finances.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full py-16 border-t'>
					<div className='container px-4'>
						<div className='grid grid-cols-2 gap-16'>
							<div className='space-y-4'>
								<div className='inline-block px-3 py-1 text-sm bg-gray-100 rounded-lg'>
									Contact Us
								</div>
								<h2 className='text-5xl font-bold tracking-tighter'>
									Let's Discuss Your Auditing Needs
								</h2>
								<p className='max-w-[700px] text-gray-500 text-xl/relaxed'>
									Our team of experienced auditors is ready to
									help you navigate the complex world of
									financial compliance and internal controls.
									Contact us today to schedule a consultation.
								</p>
								<Link
									className='inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow h-9 text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50'
									to='#'>
									Get a Quote
								</Link>
							</div>
							<div className='flex flex-col items-start space-y-4'>
								<div className='inline-block px-3 py-1 text-sm bg-gray-100 rounded-lg'>
									Our Locations
								</div>
								<p className='mx-auto max-w-[700px] text-gray-500 text-xl/relaxed'>
									With offices across the country, Madeline
									Advisory is conveniently located to serve
									clients nationwide. Our team of auditors is
									ready to visit your site or conduct remote
									audits as needed.
								</p>
								<div className='grid grid-cols-2 gap-4'>
									<div className='space-y-1'>
										<h4 className='text-lg font-bold'>
											Mumbai
										</h4>
										<h4 className='text-lg font-bold'>
											Admedabad
										</h4>
										<h4 className='text-lg font-bold'>
											Uganda
										</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Chatbot />
		</section>
	);
}
