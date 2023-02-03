import { Link } from "react-router-dom";

export default function RegisterPage() {
	return (
		<div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-[#EBEBEB]  to-amber-50 '>
			<div className='flex  flex-row h-[380px] w-[550px] bg-white rounded-xl '>
				<div className='flex  h-[380px] w-[550px] p-2'>
					<div className='flex justify-center w-[260px]'>
						<img
							src='https://ik.imagekit.io/pfdt0wwx5/final_project/sora_pr-img_1-667x1000.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675250423844'
							className='scale-150 pl-6 pb-10'
							alt=''
						/>
					</div>
					<form className='flex flex-col w-[250px] '>
						<div className='ml-1 py-5 text-[#3b82f6] '>
							<div className=' text-xl  font-semibold  '>
								Register to
							</div>
							<div className=' font-extrabold text-4xl  '>
								Nihon no Live
							</div>
						</div>
						<div className='min-w-max    flex flex-col'>
							<input
								className='placeholder:text-xs p-[6px] border border-gray-300 rounded-t-md'
								placeholder='Enter Username'
                                name="username"
                                type='text'
							></input>
							<input
								className='placeholder:text-xs p-[6px] border border-gray-300 border-t-0'
								placeholder='Enter Email'
                                name="email"
                                type='email'
							></input>
							<input
								className='placeholder:text-xs p-[6px] border border-gray-300  border-t-0'
								placeholder='Enter Password'
                                name="password"
                                type='password'
							></input>
							<input
								className='placeholder:text-xs p-[6px] border border-gray-300  border-t-0'
								placeholder='Enter Phone Number'
                                name="phoneNumber"
                                type='number'
							></input>
							<input
								className='placeholder:text-xs p-[6px] border border-gray-300 border-t-0 rounded-b-md'
								placeholder='Enter Address'
                                name="address"
                                type='text'
							></input>
						</div>
						<div className=' flex flex-row my-4'>
							<button
								type='submit'
								className='bg-[#3b82f6] rounded flex shadow-md shadow-[#3b82f6] justify-center items-center font-semibold text-[11px] text-slate-100 h-[33px] w-[70px] z-20'
							>
								<a href=''>LOG IN</a>
							</button>
							<div className=' flex ml-3  text-[10px] font-medium text-slate-400 h-[33px] w-[200x] justify-center items-center'>
								<Link to={'/login'}>Already have account, Click here</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
