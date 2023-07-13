import { useLocation } from 'react-router-dom';
import './MyList.css';
import { useState } from 'react';
import format from 'date-fns/format';
import { DateRange } from 'react-date-range';
import SearchItems from '../searchItems/SearchItems';


const MyList = () => {
    const location = useLocation();
    const [openDate, setOpendate] = useState(false);
    const [destination, setDestination] = useState(location.state.destination);
    const [options, setOptions] = useState(location.state.options);
    const [date, setDate] = useState(location.state.date);
    return ( 
        <div className="myList">
            <div className="container py-10 flex capitalize mt-20 justify-center gap-2">
                <div className="searching h-fit sticky top-0 flex flex-col gap-2 rounded-[10px] py-2 px-4 bg-[#febb02] text-black text-[20px]">
                        <h1 className='text-[25px] font-bold'>Search</h1>
                        <div className="destination">
                            <label htmlFor="destination" className="capitalize text-[16px]">destination</label>
                            <input type="text" className='px-2 border-none rounded-[6px] outline-none text-[16px] py-2' name="destination" placeholder={destination} />
                        </div>
                        <div className="date flex flex-col gap-1">
                            <label className="capitalize text-[16px]">chek in date</label>
                            <span onClick={()=>setOpendate(!openDate)} className='bg-white text-black text-[16px] cursor-pointer px-2 py-2 rounded-[6px]'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span> 
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
                        <h2 className='text-[16px] font-medium'>Options</h2>
                        <div className="flex items-center justify-between">
                            <label className='text-[16px]'>min price <span className='text-[12px]'>per night</span></label>
                            <input type="number" className='text-[16px] w-[30%]'/>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className='text-[16px]'>max price <span className='text-[12px]'>per night</span></label>
                            <input type="number" className='text-[16px] w-[30%]'/>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className='text-[16px]'>Adult</label>
                            <input min={1} type="number" className='text-[16px] w-[30%]'placeholder={options.adults}/>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className='text-[16px]'>Children</label>
                            <input min={0} type="number" className='text-[16px] w-[30%]' placeholder={options.child}/>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className='text-[16px]'>Room</label>
                            <input min={1} type="number" className='text-[16px] w-[30%]' placeholder={options.room}/>
                        </div>
                        <button className="bg-[#1e3a8a] text-white rounded-[6px] cursor-pointer hover:bg-white hover:text-[#1e3a8a] duration-500 px-4">Search</button>
                </div>

                <div className="result">
                    <SearchItems/>
                    <SearchItems/>
                    <SearchItems/>
                    <SearchItems/>
                    <SearchItems/>
                    <SearchItems/>
                    <SearchItems/>
                    <SearchItems/>
                    <SearchItems/>
                    <SearchItems/>
                    <SearchItems/>
                </div>
            </div>
        </div>
     );
}
 
export default MyList;