import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
	let navigate = useNavigate();

    const initialValue = {
        email: "",
        password: "",
    };

    const [inputForm, setInputForm] = useState(initialValue);

    async function login(body) {
        try {
            let data = await fetch(`http://localhost:3000/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            
            if (!data.ok) {
                throw new Error('Something went wrong');
            }
            
            let convert = await data.json();

            localStorage.setItem("access_token", convert.access_token);
            localStorage.setItem("username", convert.username);
            localStorage.setItem("isSubscribed", convert.isSubscribed);
            
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    }

    function handleLogin(val) {
        let data = {
            ...inputForm,
            [val.target.name]: val.target.value,
        };
        setInputForm(data);
    }
	return (
		<div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-[#EBEBEB]  to-amber-50 '>
			<div className='flex  flex-row h-[380px] w-[550px] bg-white rounded-xl '>
				<div className='flex  h-[380px] w-[550px] p-2'>
					<div className='flex justify-center w-[260px]'>
						<img
							src='https://ik.imagekit.io/pfdt0wwx5/final_project/sora_pr-img_1-667x1000.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675250423844'
							className=' scale-150 pl-6 pb-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 hover:mt-5'
							alt=''
						/>
					</div>
					<form
                className='flex flex-col w-[250px] '
                onSubmit={(e) => {
                    e.preventDefault();
                    login(inputForm);
                }}
            >
						<div className='ml-1 py-5 text-[#3b82f6] '>
							<div className=' text-xl  font-semibold  '>Welcome to</div>
							<div className=' font-extrabold text-4xl  '>
								Nihon no Live
							</div>
						</div>
						<div className='min-w-max  flex flex-col'>
							<input
								className='placeholder:text-xs p-[6px] border border-gray-300 rounded-t-md'
								placeholder='Email Address'
								name='email'
								type='email'
								value={inputForm.email}
								onChange={handleLogin}
							></input>
							<input
								className='placeholder:text-xs p-[6px] border border-gray-300   border-t-0 rounded-b-md'
								placeholder='Password'
								name='password'
								type='password'
								value={inputForm.password}
								onChange={handleLogin}
							></input>
						</div>
						<div className=' flex flex-row my-4'>
							<button
								type='submit'
								className='bg-[#3b82f6] rounded flex shadow-md shadow-[#3b82f6] justify-center items-center font-semibold text-[11px] text-slate-100 h-[33px] w-[70px] z-20'
							>
								LOG IN
							</button>
							<div className=' text-[10px] font-medium flex w-40 pr-6 text-slate-400  justify-center items-center  '>
								<a href=''>Forgot password?</a>
							</div>
						</div>
						<div className='  text-[10px] flex justify-center mb-4 text-slate-400  '>
							or Log In with
						</div>
						<div className=' flex flex-row justify-between'>
							<div className='z-20 h-[30px] w-[118px] flex justify-center items-center rounded border border-gray-300 '>
								<a href=''>
									<img
										src='https://ik.imagekit.io/pfdt0wwx5/final_project/google-logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675358307580'
										className='w-[17.5px] '
										alt='google logo'
									/>
								</a>
							</div>
							<div className=' h-[30px] w-[118px] flex justify-center items-center  rounded border border-gray-300'>
								<a href=''>
									<img
										className='w-[17.5px]'
										src='https://ik.imagekit.io/pfdt0wwx5/final_project/facebook-logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675358609072'
										alt='facebook logo'
									/>
								</a>
							</div>
						</div>
						<div className='  text-[10px] font-medium text-slate-400 my-4'>
							<Link to={"/register"} >
								Create my <span className="text-blue-500"> Nihon no Live account! </span>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
