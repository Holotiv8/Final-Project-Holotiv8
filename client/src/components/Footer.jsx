import bgImg from "../assets/sora_pr-img_1-667x1000.png";

export default function Footer() {
	return (
		<>
			<div id='footer' className='ms-auto'>
				<div className='w-full h-maxflex flex-col'>
					<div className=' flex justify-center bg-gray-100 h-44 border-t-4 border-blue-100 mt-6'>
						<div className='grid  content-end font-extralight text-3xl pb-5'>
							V-TUBER SITE NUMBER 1
						</div>
					</div>
					<div className='flex flex-row  justify-between bg-sky-200'>
						<div className=' text-3xl p-4 pt-10 '>
							<div className='flex flex-row gap-3'>
								<div className='font-thin'>FOLLOW</div> <b>#HOLOLIVE</b>
							</div>
							<div className=' flex flex-row pt-4 gap-5 '>
								<a href=''>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
										/>
									</svg>
								</a>
								<a href=''>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
										/>
									</svg>
								</a>
								<a href=''>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z'
										/>
									</svg>
								</a>
							</div>
						</div>
						<div className='  h-44 p-7 '>
							<div className=' flex flex-col '>
								<div>Contact</div>
								<div>
									<a href=''>
										<img
											className='w-auto h-10'
											src='https://ik.imagekit.io/pfdt0wwx5/final_project/sora_pr-img_1-667x1000.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675250423844'
											alt='hololives idol'
											href=''
										/>
									</a>
								</div>
								<div>Hololive. inc</div>
								<div>Jakarta</div>
							</div>
						</div>
					</div>
					<div className=' flex flex-col bg-gray-100 p-2 font-bold'>
						<a href='' className='flex justify-center'>
							/\
						</a>
						<div className='flex justify-center'>BACK TO TOP</div>
					</div>
					<div className=' flex flex-row justify-center gap-6  bg-gray-100 h-24 pt-6 border-t-4 border-blue-100'>
						<a href=''>Home</a>
						<a href=''>About</a>
						<a href=''>Talent</a>
						<a href=''>Merch</a>
						<a href=''>Brand</a>
						<a href=''>Legal</a>
					</div>
				</div>
			</div>
		</>
	);
}
