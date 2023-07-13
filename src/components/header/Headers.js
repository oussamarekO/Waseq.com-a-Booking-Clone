import{faBed, faCar, faGasPump, faPlane, faTaxi, faCalendarDays, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './headers.css';
import {useState} from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
const Headers = ({type}) => {
    const [openDate, setOpendate] = useState(false);
    const [destination, setDestination] = useState("");
    const [openOptions, setOpenoptions] = useState(false);
    const [options, setOptions] = useState({
      adults : 1, 
      child: 0, 
      room : 1
    });
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
     
      const handelOptions = (name, operation)=> {
        setOptions((prev)=>{
            return {
                ...prev,
                [name]:operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
      }
    const navigate = useNavigate();
    const handelSearch = ()=> {
        navigate('/hotels', {state: {destination, options, date}});
    }
    return ( 
        <div className={type === "list" ? "header w-full bg-[#1e3a8a] font-['Nunito'] " : "header media w-full bg-transparent font-['Nunito'] "}>
            <div className={type === "list" ? "container listMode py-6 relative" : "container py-6 relative"}>
                <div className="list flex items-center gap-4 sm:gap-0 mb-8 sm:text-sm">
                    <div className="item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>stays</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flight</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faGasPump} />
                        <span>Attractions</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>airport Taxi</span>
                    </div>
                </div>
                {type !=="list" && <>
                    <h1 className="title text-white text-6xl font-bold">The joy of home wherever you go</h1>
                    <p className="text-white text-lg ">Discover dreamy villas, houses, cabins, & more</p>
                    <button className='text-white border-2 border-white duration-500 mt-6 mb-10 bg-transparent font-medium capitalize py-2 px-6 hover:bg-[#1e3a8a]'>Find your vacation rental</button>
    {/* ************************************************************ */}
                    <div className="searchBar ">
                        <div className="searchItem">
                            <FontAwesomeIcon icon={faBed} className='searchIcon'/>
                            <input onChange={e => setDestination(e.target.value)} type="text" className='headerInput' placeholder='Where are you going?' />
                        </div>
                        <div className="searchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className='searchIcon'/>
                            <span onClick={()=>setOpendate(!openDate)}  className='headerText duration-500 text-[#222] font-semibold cursor-pointer'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='dateTime'
                                minDate={new Date()}
                                />
    }                       
                        </div>
                        <div className="searchItem">
                            <FontAwesomeIcon icon={faUser} className='searchIcon'/>
                            <span onClick={()=> setOpenoptions(!openOptions)} className='headerText text-[#222] duration-500 font-semibold cursor-pointer'>{`${options.adults} adults and ${options.child} children for ${options.room} room `}</span>
                            {openOptions && <div className="options">
                                <div className="option">
                                    <span>Adults</span>
                                    <div className="num">
                                        <button disabled={options.adults <= 1} onClick={()=>handelOptions("adults", "d")}>-</button>
                                        <span>{options.adults}</span>
                                        <button onClick={()=>handelOptions("adults", "i")} className='text-sky-500'>+</button>
                                    </div>
                                </div>

                                <div className="option">
                                    <span>Children</span>
                                    <div className="num">
                                        <button disabled={options.child <= 0} onClick={()=>handelOptions("child", "d")}>-</button>
                                        <span>{options.child}</span>
                                        <button onClick={()=>handelOptions("child", "i")} className='text-sky-500'>+</button>
                                    </div>
                                </div>

                                <div className="option">
                                    <span>Rooms</span>
                                    <div className="num">
                                        <button disabled={options.room <= 1} onClick={()=>handelOptions("room", "d")}>-</button>
                                        <span>{options.room}</span>
                                        <button onClick={()=>handelOptions("room", "i")} className='text-sky-500'>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="searchItem"><button onClick={handelSearch} className="search">Search</button></div>
                    </div>
                </>}
            </div>
        </div>
     );
}
 
export default Headers;