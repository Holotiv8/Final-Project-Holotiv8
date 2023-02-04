import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate()
    const initialValue = {
        email: '',
        password: '',
        username: '',
        phoneNumber: '',
        address: ''
    }

    const [inputForm, setInputForm] = useState(initialValue)

    async function register(body) {
        try {
            let data = await fetch('http://localhost:3000/users/register', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            if (!data.ok) {
                throw new Error('failed register from server')
            }

			navigate('/login')
        } catch (err) {
            console.log(err);
        }
    }

	function handleRegister(val) {
		let data = {
			...inputForm,
			[val.target.name]: val.target.value
		}
		setInputForm(data)
	}

	return (
		<div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-[#EBEBEB]  to-amber-50 '>
			<div className='flex  flex-row h-[380px] w-[550px] bg-white rounded-xl '>
				<div className='flex  h-[380px] w-[550px] p-2'>
					<div className='flex justify-center w-[260px]'>
						<img
							src='https://ik.imagekit.io/pfdt0wwx5/final_project/fubuki.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675411394939'
							className='scale-150 pl-6 pb-10'
							alt=''
						/>
					</div>
					<form className='flex flex-col w-[250px] '
						onSubmit={(e) => {
							e.preventDefault()
							register(inputForm)
						}}
					>
						<div className='ml-1 py-5 text-[#3b82f6] '>
							<div className=' text-xl  font-semibold  '>
								Register to
							</div>
							<div className=' font-extrabold text-4xl  '>
								Nihon no Live
							</div>
						</div>
						<div className='min-w-max  gap-[3px]  flex flex-col'>
							<input
								className='placeholder:text-xs p-[6px] border border-gray-300 rounded'
								placeholder='Username'
                                name="username"
                                type='text'
								value={inputForm.username}
								onChange={handleRegister}
							></input>
							<input
								className='placeholder:text-xs p-[6px] border border-gray-300 rounded'
								placeholder='Email'
                                name="email"
                                type='email'
								value={inputForm.email}
								onChange={handleRegister}
							></input>
							<input
								className='placeholder:text-xs p-[6px] border border-gray-300  rounded'
								placeholder='Password'
                                name="password"
                                type='password'
								value={inputForm.password}
								onChange={handleRegister}
							></input>
							<input
								className='placeholder:text-xs p-[6px] border border-gray-300  rounded'
								placeholder='Phone Number'
                                name="phoneNumber"
                                type='number'
								value={inputForm.phoneNumber}
								onChange={handleRegister}
							></input>
							<input
								className='placeholder:text-xs p-[6px] border border-gray-300  rounded'
								placeholder='Address'
                                name="address"
                                type='text'
								value={inputForm.address}
								onChange={handleRegister}
							></input>
						</div>
						<div className=' flex flex-row my-2'>
							<button
								type='submit'
								className='bg-[#3b82f6] rounded flex shadow-md shadow-[#3b82f6] justify-center items-center font-semibold text-[11px] text-slate-100 h-[33px] w-[70px] z-20'
							>
								SUBMIT
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
