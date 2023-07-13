const MailList = () => {
    return ( 
        <div className="mailList mt-6 bg-[#1e3a8a] text-white flex flex-col items-center justify-center text-center gap-2 py-6">
            <h1 className="text-2xl font-bold capitalize ">Save time, Save money!</h1>
            <h2 className="capitalize ">sign up and we'll send the best deals for you</h2>
            <div className="emailing flex gap-2 items-center w-[40%] sm:px-6 sm:w-full">
                <input type="email" placeholder="Your email adress" className="text-black outline-none flex-1 px-4 py-2" />
                <button className="btn px-4 py-2 text-white bg-[#0071c2]">Subscribe</button>
            </div>
        </div>
     );
}
 
export default MailList;