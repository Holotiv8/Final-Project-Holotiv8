import NavbarComponent from "../components/NavbarComponent";
import { TfiAlignRight } from "react-icons/tfi";
import { RiChatDeleteLine } from "react-icons/Ri";
import { Link } from "react-router-dom";

export default function FavoritePage() {
	return (
		<div className='w-full px-10'>
			<NavbarComponent />
			<div className='flex justify-center items-center gap-6  '>
				<div className='group flex flex-col justify-between  rounded-lg  relative w-[245px] h-[373px] bg-gradient-to-r from-white via-violet-400 to-violet-500    text-lg  '>
					<div className=' cursor-pointer flex justify-end pr-2 gap-2 z-40 pt-2'>
						<Link to={""} className='flex w-4'>
							<TfiAlignRight />
						</Link>
						<Link to={"/delete"} className='flex w-5'>
							<RiChatDeleteLine />
						</Link>
					</div>
					<img
						src='https://ik.imagekit.io/Holotiv8/Final_Project/Detail/moona_hoshinova_detail.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675091181830'
						alt=''
						className='ml-[250px] 0 absolute flex  w-max top-0 -inset-full  z-10 '
					/>
					<div className='bg-orange-300 z-40'>
						<div>
							<h1>Moona Hoshinova</h1>
						</div>
						<div>Hallo Moonafic, thank you to like me</div>
					</div>
				<div className='0 absolute top-0 -inset-full h-full w-1/2  block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine  ' />
				</div>
				<div className='group flex flex-col justify-between  rounded-lg  relative w-[245px] h-[373px] bg-gradient-to-r from-white via-violet-400 to-violet-500    text-lg  '>
					<div className=' cursor-pointer flex justify-end pr-2 gap-2 z-40 pt-2'>
						<Link to={""} className='flex w-4'>
							<TfiAlignRight />
						</Link>
						<Link to={"/delete"} className='flex w-5'>
							<RiChatDeleteLine />
						</Link>
					</div>
					<img
						src='https://ik.imagekit.io/Holotiv8/Final_Project/Detail/moona_hoshinova_detail.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675091181830'
						alt=''
						className='ml-[250px] 0 absolute flex  w-max top-0 -inset-full  z-10 '
					/>
					<div className='bg-orange-300 z-40'>
						<div>
							<h1>Moona Hoshinova</h1>
						</div>
						<div>Hallo Moonafic, thank you to like me</div>
					</div>
				<div className='0 absolute top-0 -inset-full h-full w-1/2  block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine  ' />
				</div>
				<div className='group flex flex-col justify-between  rounded-lg  relative w-[245px] h-[373px] bg-gradient-to-r from-white via-violet-400 to-violet-500    text-lg  '>
					<div className=' cursor-pointer flex justify-end pr-2 gap-2 z-40 pt-2'>
						<Link to={""} className='flex w-4'>
							<TfiAlignRight />
						</Link>
						<Link to={"/delete"} className='flex w-5'>
							<RiChatDeleteLine />
						</Link>
					</div>
					<img
						src='https://ik.imagekit.io/Holotiv8/Final_Project/Detail/moona_hoshinova_detail.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675091181830'
						alt=''
						className='ml-[250px] 0 absolute flex  w-max top-0 -inset-full  z-10 '
					/>
					<div className='bg-orange-300 z-40'>
						<div>
							<h1>Moona Hoshinova</h1>
						</div>
						<div>Hallo Moonafic, thank you to like me</div>
					</div>
				<div className='0 absolute top-0 -inset-full h-full w-1/2  block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine  ' />
				</div>
				<div className='group flex flex-col justify-between  rounded-lg  relative w-[245px] h-[373px] bg-gradient-to-r from-white via-violet-400 to-violet-500    text-lg  '>
					<div className=' cursor-pointer flex justify-end pr-2 gap-2 z-40 pt-2'>
						<Link to={""} className='flex w-4'>
							<TfiAlignRight />
						</Link>
						<Link to={"/delete"} className='flex w-5'>
							<RiChatDeleteLine />
						</Link>
					</div>
					<img
						src='https://ik.imagekit.io/Holotiv8/Final_Project/Detail/moona_hoshinova_detail.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675091181830'
						alt=''
						className='ml-[250px] 0 absolute flex  w-max top-0 -inset-full  z-10 '
					/>
					<div className='bg-orange-300 z-40'>
						<div>
							<h1>Moona Hoshinova</h1>
						</div>
						<div>Hallo Moonafic, thank you to like me</div>
					</div>
				<div className='0 absolute top-0 -inset-full h-full w-1/2  block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine  ' />
				</div>
			</div>
		</div>
	);
}
