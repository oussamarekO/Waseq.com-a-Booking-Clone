import './HomeGuest.css';
import hotels from '../../asset/room1.jpg';
import villas from '../../asset/room2.jpg';
import ressort from '../../asset/room3.jpg';
// import appartement from '../../asset/room4.jpg';
import cabins from '../../asset/room5.jpg';
const HomeGuest = () => {
    return ( 
        <div className="guest  py-2 px-6 w-full">
            <div className="box">
                <img src={hotels} alt="property" />
                <div className="title">
                    <h1>Aparthotel Stare Miasto</h1>
                    <h2>Old Town, Poland, Kraków Starting from <span className='font-bold text-black'>DZD 16,681</span></h2>
                    <h2 className='pt-2'><span className='p-2 text-white bg-[#1e3a8a] rounded-md'>8.7</span> Exelent 3000 reviews</h2>
                </div>
            </div>

            <div className="box">
                <img src={ressort} alt="property" />
                <div className="title">
                <h1>Aparthotel Stare Miasto</h1>
                    <h2>Old Town, Poland, Kraków Starting from <span className='font-bold text-black'>DZD 16,681</span></h2>
                    <h2 className='pt-2'><span className='p-2 text-white bg-[#1e3a8a] rounded-md'>8.7</span> Exelent 3000 reviews</h2>
                </div>
            </div>

            <div className="box">
                <img src={villas} alt="property" />
                <div className="title">
                <h1>Aparthotel Stare Miasto</h1>
                    <h2>Old Town, Poland, Kraków Starting from <span className='font-bold text-black'>DZD 16,681</span></h2>
                    <h2 className='pt-2'><span className='p-2 text-white bg-[#1e3a8a] rounded-md'>8.7</span> Exelent 3000 reviews</h2>
                </div>
            </div>

            <div className="box">
                <img src={cabins} alt="property" />
                <div className="title">
                <h1>Aparthotel Stare Miasto</h1>
                    <h2>Old Town, Poland, Kraków Starting from <span className='font-bold text-black'>DZD 16,681</span></h2>
                    <h2 className='pt-2'><span className='p-2 text-white bg-[#1e3a8a] rounded-md'>8.7</span> Exelent 3000 reviews</h2>
                </div>
            </div>
{/* 
            <div className="box">
                <img src={appartement} alt="property" />
                <div className="title">
                    <h1>Appartement</h1>
                    <h2>156 appartement</h2>
                </div>
            </div> */}
        </div>
     );
}
 
export default HomeGuest;