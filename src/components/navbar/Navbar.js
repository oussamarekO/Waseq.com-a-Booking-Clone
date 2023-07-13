import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='bg-[#1e3a8a] font-["Nunito"] w-full'>
            <div className=" text-white flex items-center justify-between py-2 px-20 sm:px-2  ">
                <Link to={'/'} className='text-white font-bold text-xl  '>Wasaq.com</Link>
                <div className="flex items-center gap-4 sm:gap-2">
                    <button className="duration-700 ease hover:border-transparent hover:bg-white hover:text-[#1e3a8a]  py-1 px-4 sm:hidden capitalize text-lg border-white  border-solid border-2 bg-transparent">list your property</button>
                    <button className='capitalize py-1 duration-500 hover:bg-transparent hover:text-white px-4 sm:px-2 border-white rounded-md text-lg border-2 border-solid bg-white text-black'>register</button>
                    <button className='capitalize py-1 duration-500 hover:bg-transparent hover:text-white px-4 sm:px-2 border-white rounded-md text-lg border-2 border-solid bg-white text-black'>sign in</button>
                </div>
            </div>
        </nav> 
     );
}
 
export default Navbar;